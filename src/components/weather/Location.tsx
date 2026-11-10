
"use client";

import { getWeatherIcon } from "@/hooks/useWeather";
import { getWeather } from "@/services/weather";
import type { LocationProps, WeatherData } from "@/types/types";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Location({ onSelectCity }: LocationProps) {
    const [weather, setWeather] = useState<WeatherData[]>([]);

    const DailyIcon = weather.map((val) => {
        return getWeatherIcon(
            val.daily.weather_code[0],
            val.current.is_day
        );
    });

    const MyData = [
        { id: 1, name: "Tehran", icon: DailyIcon?.[0], latitude: 35.6892, longitude: 51.3890, maxTemp: weather[0]?.daily?.temperature_2m_max[0], minTemp: weather[0]?.daily?.temperature_2m_min[0] },
        { id: 2, name: "London", icon: DailyIcon?.[1], latitude: 51.5072, longitude: -0.1276, maxTemp: weather[1]?.daily?.temperature_2m_max[0], minTemp: weather[1]?.daily?.temperature_2m_min[0] },
        { id: 3, name: "Dubai", icon: DailyIcon?.[2], latitude: 25.2048, longitude: 55.2708, maxTemp: weather[2]?.daily?.temperature_2m_max[0], minTemp: weather[2]?.daily?.temperature_2m_min[0] },
        { id: 4, name: "Seoul", icon: DailyIcon?.[3], latitude: 37.5665, longitude: 126.9780, maxTemp: weather[3]?.daily?.temperature_2m_max[0], minTemp: weather[3]?.daily?.temperature_2m_min[0] },
    ];

    useEffect(() => {
        Promise.all(
            MyData.map((val) =>
                getWeather(val.latitude, val.longitude)
            )
        ).then((data) => {
            setWeather(data);
        });
    }, []);

    return (
        <div className="h-full w-full min-w-0 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:p-4">

            {/* Header */}
            <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                    <MapPin size={19} className="shrink-0 text-blue-600" />

                    <h2 className="truncate text-sm font-semibold text-slate-900">
                        Popular cities
                    </h2>
                </div>

                <button className="shrink-0 text-xs font-medium text-blue-500 transition hover:text-blue-700">
                    View all
                </button>
            </div>

            {/* Cities */}
            <div className="flex min-w-0 flex-col">
                {MyData.map((val) => {
                    const Icon = val.icon;

                    return (
                        <div
                            key={val.id}
                            className="flex min-h-[55px] w-full min-w-0 items-center justify-between gap-2 rounded-lg border-b border-slate-100 px-1 py-2 text-xs transition hover:bg-blue-50/50 sm:px-3 sm:text-sm"
                        >
                            <span className="min-w-0 truncate font-medium text-slate-800">
                                {val.name}
                            </span>

                            <div className="flex shrink-0 items-center gap-2 sm:gap-3">

                                <span className="flex h-6 w-6 items-center justify-center">
                                    {Icon && <Icon size={19} className="text-blue-500" />}
                                </span>

                                <span className="text-xs font-semibold text-slate-800">
                                    {val.maxTemp ?? "--"}°
                                </span>

                                <span className="text-xs text-slate-400">
                                    {val.minTemp ?? "--"}°
                                </span>

                                <button
                                    type="button"
                                    onClick={() => onSelectCity && onSelectCity(val)}
                                    className="shrink-0 text-[10px] text-slate-400 transition hover:text-blue-500 sm:text-xs"
                                >
                                    See more
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
