"use client";
import { MapPin, Wind, Droplets, Sunrise, Sunset, Search, } from "lucide-react";

import type { CurrentWeatherProps, } from "@/types/types";
// مشخص کردن اطلاعاتی که از page.tsx دریافت می‌کنیم
export default function CurrentWeather(
    { weather, daily, cityName, isCityModalOpen, setIsCityModalOpen, searchQuery, setSearchQuery, handleSearch, Icon
    }: CurrentWeatherProps) {

    const MyData = [
        { id: 1, name: "Wind", title: `${weather?.wind_speed_10m} km/h`, des: `${weather?.wind_direction_10m}°`, icon: Wind, },
        { id: 2, name: "Humidity", title: `${weather?.relative_humidity_2m} %`, icon: Droplets, },
        { id: 3, name: "Sunrise", title: `${daily?.sunrise[0]?.split("T")[1]}`, icon: Sunrise, },
        { id: 4, name: "Sunset", title: `${daily?.sunset[0]?.split("T")[1]}`, icon: Sunset, },
    ];

    // نمایش Loading تا زمان دریافت اطلاعات
    if (!weather || !daily) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

                    <p className="text-sm text-gray-500">
                        Loading weather...
                    </p>
                </div>
            </div>
        );
    }



    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br bg-blue-900 text-white shadow-sm">
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between px-6 pt-5">

                <div className="flex items-center gap-3">
                    <MapPin size={21} strokeWidth={2} />

                    <div>
                        <h2 className="text-xl">{cityName}</h2>

                        <p className="mt-1 text-xs text-white/90">
                            {daily.time[0]}
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => setIsCityModalOpen?.(!isCityModalOpen)}  
                     className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs transition hover:bg-white/20"
                >
                    <MapPin size={15} />
                    Change city
                </button>

                {isCityModalOpen && (
                    <div className="flex text-[12px]">
                        <input
                            className="outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery?.(e.target.value)}
                            placeholder="Search city..."
                        />

                        <button
                            onClick={handleSearch}
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500 text-white shadow-sm transition-all duration-200 hover:bg-blue-600 hover:shadow-md active:scale-90"
                            aria-label="Search"
                        >
                            <Search size={16} strokeWidth={2.2} />
                        </button>
                    </div>
                )}

            </div>

            {/* Temperature */}
            <div className="relative z-10 flex flex-1 items-center gap-5 px-8 py-4">

                {Icon && <Icon size={82} />}

                <div className="flex flex-col">
                    <h1 className="text-6xl leading-none tracking-tight">
                        {weather.temperature_2m}°C
                    </h1>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/90">
                        <span>
                            Feels like {weather.apparent_temperature}°
                        </span>

                        <span className="text-white/50">·</span>

                        <span>
                            H: {daily.temperature_2m_max[0]}°
                        </span>

                        <span>
                            L: {daily.temperature_2m_min[0]}°
                        </span>
                    </div>
                </div>
            </div>

            {/* Weather Details */}
            <div className="relative z-10 mt-auto grid grid-cols-4 border-t border-white/20 bg-blue-950/20 px-3 py-3">

                {MyData.map((val) => {
                    const Icon = val.icon;

                    return (
                        <div
                            key={val.id}
                            className="flex items-center justify-center gap-2 px-1"
                        >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                                <Icon size={18} strokeWidth={1.7} />
                            </span>

                            <div className="min-w-0">
                                <p className="text-[10px] text-white/80">
                                    {val.name}
                                </p>

                                <p className="whitespace-nowrap text-xs">
                                    {val.title}
                                </p>

                                {val.des && (
                                    <p className="text-[10px] text-white/80">
                                        {val.des}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}
