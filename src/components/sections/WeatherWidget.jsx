import React, { useState, useEffect } from 'react';
import { CloudSnow, Wind, Compass } from 'lucide-react';

const getWindDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
};

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=44.6681&longitude=6.7725&current=temperature_2m,wind_speed_10m,wind_direction_10m&wind_speed_unit=kmh'
                );
                const data = await response.json();
                setWeather(data.current);
            } catch (error) {
                console.error('Error fetching weather:', error);
            }
        };

        fetchWeather();
    }, []);

    const temp = weather ? `${Math.round(weather.temperature_2m)}°` : '--°';
    const windSpeed = weather ? `${Math.round(weather.wind_speed_10m)} NDS` : '-- NDS';
    const windDir = weather ? getWindDirection(weather.wind_direction_10m) : '--';

    return (
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
            <div className="bg-bg border border-ink p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-48 font-mono text-ink">
                <div className="flex justify-between items-center border-b border-ink pb-2 mb-2">
                    <span className="text-xs font-bold uppercase">CEILLAC - QUEYRAS</span>
                    <div className="w-2 h-2 bg-raw-green rounded-full animate-pulse"></div>
                </div>

                <div className="flex items-center justify-between mb-3">
                    <CloudSnow className="w-8 h-8 stroke-1" />
                    <div className="text-right">
                        <span className="text-3xl font-bold block leading-none">{temp}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] uppercase border-t border-ink pt-2 opacity-80">
                    <div className="flex items-center gap-1">
                        <Wind className="w-3 h-3" />
                        <span>{windSpeed}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Compass className="w-3 h-3" />
                        <span>{windDir}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
