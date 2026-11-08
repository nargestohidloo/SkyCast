
"use client";
import { MapPin, Wind, Droplets, Sunrise, Sunset, Search } from "lucide-react";

import type { CurrentWeatherProps } from "@/types/types";

// مشخص کردن اطلاعاتی که از page.tsx دریافت می‌کنیم
export default function CurrentWeather(
    {
        weather,
        daily,
        cityName,
        isCityModalOpen,
        setIsCityModalOpen,
        searchQuery,
        setSearchQuery,
        handleSearch,
        WeatherIcon
    }: CurrentWeatherProps) {

    const MyData = [
        { id: 1, name: "Wind", title: `${weather?.wind_speed_10m} km/h`, des: `${weather?.wind_direction_10m}°`, icon: Wind },
        { id: 2, name: "Humidity", title: `${weather?.relative_humidity_2m} %`, icon: Droplets },
        { id: 3, name: "Sunrise", title: `${daily?.sunrise[0]?.split("T")[1]}`, icon: Sunrise },
        { id: 4, name: "Sunset", title: `${daily?.sunset[0]?.split("T")[1]}`, icon: Sunset },
    ];

    // نمایش Loading تا زمان دریافت اطلاعات
    if (!weather || !daily) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-white rounded-[20px]">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4  border-blue-100 border-t-blue-600" />

                    <p className="text-sm text-slate-500">
                        Loading weather...
                    </p>
                </div>
            </div>
        );
    }

    console.log("hello world");

    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-slate-800 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between px-6 pt-5">

                <div className="flex items-center gap-3">
                    <MapPin size={21} strokeWidth={2} className="text-blue-600" />

                    <div>
                        <h2 className="text-xl text-slate-800">{cityName}</h2>

                        <p className="mt-1 text-xs text-slate-400">
                            {daily.time[0]}
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => setIsCityModalOpen?.(!isCityModalOpen)}
                    className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs text-blue-600 transition hover:bg-blue-100"
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
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-90"
                            aria-label="Search"
                        >
                            <Search size={16} strokeWidth={2.2} />
                        </button>
                    </div>
                )}

            </div>

            {/* Temperature */}
            <div className="relative z-10 flex flex-1 items-center gap-5 px-8 py-4">

                {WeatherIcon && <WeatherIcon size={82} className="text-blue-500" />}

                <div className="flex flex-col">
                    <h1 className="text-6xl leading-none tracking-tight text-slate-800">
                        {weather.temperature_2m}°C
                    </h1>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span>
                            Feels like {weather.apparent_temperature}°
                        </span>

                        <span className="text-slate-300">·</span>

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
            <div className="relative z-10 mt-auto grid grid-cols-4 border-t border-slate-200/80 bg-slate-50/70 px-3 py-3">

                {MyData.map((val) => {
                    const Icon = val.icon;

                    return (
                        <div
                            key={val.id}
                            className="flex items-center justify-center gap-2 px-1"
                        >

                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <Icon size={18} strokeWidth={1.7} />
                            </span>

                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-400">
                                    {val.name}
                                </p>

                                <p className="whitespace-nowrap text-xs text-slate-800">
                                    {val.title}
                                </p>

                                {val.des && (
                                    <p className="text-[10px] text-slate-400">
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
