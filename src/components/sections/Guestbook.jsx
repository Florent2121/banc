import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../supabaseClient';

const Guestbook = () => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch messages on mount
    useEffect(() => {
        fetchMessages();

        // Realtime subscription
        const channel = supabase
            .channel('messages-channel')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'messages' },
                (payload) => {
                    setMessages((prev) => [payload.new, ...prev]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching messages:', error);
        } else {
            setMessages(data || []);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !msg) return;

        setLoading(true);

        const { error } = await supabase
            .from('messages')
            .insert([{ name, content: msg }]);

        if (error) {
            console.error('Error submitting message:', error);
            alert('Erreur lors de l\'envoi du message.');
        } else {
            // Success: clear form (list updates via realtime or we could manually refresh)
            setName("");
            setMsg("");
            // If realtime is not enabled, uncomment below:
            // fetchMessages();
        }
        setLoading(false);
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        });
    };

    return (
        <section className="w-full bg-bg border-b border-ink py-12 md:py-24 px-4 md:px-0 flex flex-col items-center">

            <div className="w-full max-w-4xl border border-ink p-8 md:p-12 relative overflow-hidden group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-2">
                        Dites que vous étiez là
                    </h2>
                    <p className="font-mono text-sm uppercase tracking-widest text-ink/60">
                        Laissez votre trace dans les archives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase font-mono">Identifiant / Nom</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-ink py-2 font-mono focus:outline-none focus:bg-ink/5 focus:pl-2 transition-all placeholder:text-ink/30"
                                placeholder="// VOTRE NOM"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase font-mono">Observation</label>
                            <textarea
                                className="w-full bg-transparent border-b border-ink py-2 font-mono h-32 focus:outline-none focus:bg-ink/5 focus:pl-2 transition-all placeholder:text-ink/30 resize-none"
                                placeholder="// VOTRE MESSAGE"
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-ink text-bg font-bold font-display uppercase tracking-widest hover:bg-raw-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "ENVOI EN COURS..." : "ARCHIVER"}
                        </button>
                    </form>

                    {/* List */}
                    <div className="border border-ink p-4 h-[400px] overflow-y-auto font-mono text-sm relative">
                        <div className="sticky top-0 bg-bg border-b border-ink pb-2 mb-4 text-xs font-bold uppercase flex justify-between z-10">
                            <span>Message</span>
                            <span>Date</span>
                        </div>
                        <div className="space-y-6">
                            {messages.length === 0 ? (
                                <p className="text-center opacity-50 py-4">Aucun message pour le moment.</p>
                            ) : (
                                messages.map((item) => (
                                    <div key={item.id} className="pb-4 border-b border-ink/20 last:border-0 hover:bg-ink/5 p-2 transition-colors">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="font-bold uppercase">{item.name}</span>
                                            <span className="text-xs opacity-50">{formatDate(item.created_at)}</span>
                                        </div>
                                        <p className="opacity-80">"{item.content}"</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ink"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ink"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ink"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ink"></div>
            </div>
        </section>
    );
};

export default Guestbook;
