
"use client";
import { MapPin, Wind, Droplets, Sunrise, Sunset, Search } from "lucide-react";
import type { CurrentWeatherProps } from "@/types/types";

export default function CurrentWeather({
    weather,
    daily,
    selectedDay,
    cityName,
    isCityModalOpen,
    setIsCityModalOpen,
    searchQuery,
    setSearchQuery,
    handleSearch,
    WeatherIcon
}: CurrentWeatherProps) {

    const selectedDate = daily?.time[selectedDay];


    const MyData = [
        { id: 1, name: "Wind", title: `${weather?.wind_speed_10m} km/h`, des: `${weather?.wind_direction_10m}°`, icon: Wind },
        { id: 2, name: "Humidity", title: `${weather?.relative_humidity_2m} %`, icon: Droplets },
        { id: 3, name: "Sunrise", title: `${daily?.sunrise[selectedDay]?.split("T")[1]}`, icon: Sunrise },
        { id: 4, name: "Sunset", title: `${daily?.sunset[selectedDay]?.split("T")[1]}`, icon: Sunset },
    ];

    const time = daily?.time[selectedDay] ?
        new Date(daily.time[selectedDay]).toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
        })
        : null;

    // Loading
    if (!weather || !daily) {
        return (
            <div className="flex h-full w-full items-center justify-center rounded-[20px] bg-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
                    <p className="text-sm text-slate-500">
                        Loading weather...
                    </p>
                </div>
            </div>
        );
    }

    console.log("hello world");

    return (
        <div className="relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-slate-800 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">

            {/* Header */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-4 pt-5 sm:px-6">

                <div className="flex min-w-0 items-center gap-3">
                    <MapPin size={21} strokeWidth={2} className="shrink-0 text-blue-600" />

                    <div className="min-w-0">
                        <h2 className="truncate text-lg text-slate-800 sm:text-xl">
                            {cityName}
                        </h2>

                        <p className="mt-1 text-xs text-slate-400">
                            {time}
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => setIsCityModalOpen?.(!isCityModalOpen)}
                    className="flex shrink-0 items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-[11px] text-blue-600 transition hover:bg-blue-100 sm:px-4 sm:text-xs"
                >
                    <MapPin size={15} />
                    Change city
                </button>

                {isCityModalOpen && (
                    <div className="absolute right-4 top-[75px] z-20 flex w-[calc(100%-2rem)] items-center gap-2 rounded-xl border border-slate-100 bg-white p-2 text-[12px] shadow-lg sm:right-6 sm:w-auto">
                        <input
                            className="min-w-0 flex-1 outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery?.(e.target.value)}
                            placeholder="Search city..."
                        />

                        <button
                            onClick={handleSearch}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-90"
                            aria-label="Search"
                        >
                            <Search size={16} strokeWidth={2.2} />
                        </button>
                    </div>
                )}

            </div>

            {/* Temperature */}
            <div className="relative z-10 flex flex-1 flex-col items-start gap-3 px-5 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-8 sm:py-4">

                {WeatherIcon && (
                    <WeatherIcon
                        size={82}
                        className="h-14 w-14 shrink-0 text-blue-500 sm:h-[82px] sm:w-[82px]"
                    />
                )}

                <div className="flex min-w-0 flex-col">
                    <h1 className="text-5xl leading-none tracking-tight text-slate-800 sm:text-6xl">
                       {daily.temperature_2m_max[selectedDay]}°C
                    </h1>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:gap-3 sm:text-sm">
                        <span>
                            Feels like {weather.apparent_temperature}°
                        </span>

                        <span className="text-slate-300">·</span>

                        <span>
                            H: {daily.temperature_2m_max[selectedDay]}°
                        </span>

                        <span>
                            L: {daily.temperature_2m_min[selectedDay]}°
                        </span>
                    </div>
                </div>
            </div>

            {/* Weather Details */}
            <div className="relative z-10 mt-auto grid grid-cols-2 gap-y-4 border-t border-slate-200/80 bg-slate-50/70 px-2 py-4 sm:grid-cols-4 sm:gap-y-0 sm:px-3 sm:py-3">

                {MyData.map((val) => {
                    const Icon = val.icon;

                    return (
                        <div
                            key={val.id}
                            className="flex min-w-0 items-center justify-center gap-2 px-1"
                        >

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 sm:h-9 sm:w-9">
                                <Icon size={18} strokeWidth={1.7} />
                            </span>

                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-400">
                                    {val.name}
                                </p>

                                <p className="whitespace-nowrap text-[11px] text-slate-800 sm:text-xs">
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
