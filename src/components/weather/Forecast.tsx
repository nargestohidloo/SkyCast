"use client"
import { CurrentWeatherProps } from "@/types/types";
import { CalendarDays } from "lucide-react";
import { useState } from "react";


export default function Forecast({  daily, DailyIcon }: CurrentWeatherProps) {

    const MyData = [
        { id: 1, name: daily ? new Date(daily.time[0]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: daily ? new Date(daily.time[0]).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "", icon: DailyIcon?.[0], temperture: daily?.temperature_2m_max[0], temp: daily?.temperature_2m_min[0] },
        { id: 2, name: daily ? new Date(daily.time[1]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: daily ? new Date(daily.time[1]).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "", icon: DailyIcon?.[1], temperture: daily?.temperature_2m_max[1], temp: daily?.temperature_2m_min[1] },
        { id: 3, name: daily ? new Date(daily.time[2]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: daily ? new Date(daily.time[2]).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "", icon: DailyIcon?.[2], temperture: daily?.temperature_2m_max[2], temp: daily?.temperature_2m_min[2] },
        { id: 4, name: daily ? new Date(daily.time[3]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: daily ? new Date(daily.time[3]).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "", icon: DailyIcon?.[3], temperture: daily?.temperature_2m_max[3], temp: daily?.temperature_2m_min[3] },
        { id: 5, name: daily ? new Date(daily.time[4]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: daily ? new Date(daily.time[4]).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "", icon: DailyIcon?.[4], temperture: daily?.temperature_2m_max[4], temp: daily?.temperature_2m_min[4] },
        { id: 6, name: daily ? new Date(daily.time[5]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: daily ? new Date(daily.time[5]).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "", icon: DailyIcon?.[5], temperture: daily?.temperature_2m_max[5], temp: daily?.temperature_2m_min[5] },
        { id: 7, name: daily ? new Date(daily.time[6]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: daily ? new Date(daily.time[6]).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "", icon: DailyIcon?.[6], temperture: daily?.temperature_2m_max[6], temp: daily?.temperature_2m_min[6] },
    ];
    const [isopen, setIsopen] = useState(1)
    const [tempUnit, setTempUnit] = useState<"C" | "F">("C");

    function convertTemp(val: number | undefined) {
        if (val === undefined) {
            return "--";
        }

        if (tempUnit === "C") {
            return Math.round(val);
        }

        return Math.round(val * 1.8 + 32);
    }

    return (
        <div className="w-full h-full rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(30,64,175,0.06)] sm:p-6">

            {/* Header */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                        <CalendarDays size={22} />
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-slate-800">
                            7-Day Forecast
                        </h2>
                        <p className="mt-1 text-xs text-slate-400">
                            Daily weather overview
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
                    <button
                        onClick={() => setTempUnit("C")}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition
                             ${tempUnit === "C"
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-slate-500 hover:bg-white hover:text-blue-600"
                            }`}
                    >
                        °C
                    </button>

                    <button
                        onClick={() => setTempUnit("F")}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition 
                            ${tempUnit === "F"
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-slate-500 hover:bg-white hover:text-blue-600"
                            }`}
                    >
                        °F
                    </button>
                </div>
            </div>

            {/* Forecast Cards */}
            <div className="grid  gap-3 grid-cols-7">

                {MyData.map((val) => {
                    const Icon = val.icon;

                    return (
                        <button
                            type="button"
                            onClick={() => setIsopen(val.id)}
                            key={val.id}
                            className={`group  flex min-h-[190px] min-w-0 flex-col items-center justify-between rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                            ${isopen === val.id
                                    ? "border-blue-500 bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200"
                                    : "border-slate-100 bg-slate-50/70 text-slate-800 hover:border-blue-200 hover:bg-blue-50/50"
                                }`}
                        >

                            {/* Day */}
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-sm font-bold">
                                    {val.name}
                                </span>

                                <span className={`text-xs ${isopen === val.id
                                    ? "text-blue-100"
                                    : "text-slate-400"
                                    }`}>
                                    {val.date}
                                </span>
                            </div>

                            {/* Weather Icon */}
                            <div className={`mt-1.5 flex h-14 w-14 items-center justify-center rounded-2xl transition
                            ${isopen === val.id
                                    ? "bg-white/15 text-white"
                                    : "bg-white text-blue-500 shadow-sm"
                                }`}>
                                {Icon && <Icon size={30} strokeWidth={1.7} />}
                            </div>

                            {/* Temperature */}
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl font-bold tracking-tight">
                                    {convertTemp(val.temperture)}°
                                </span>

                                <span className={`text-[11px] font-medium ${isopen === val.id
                                    ? "text-blue-100"
                                    : "text-slate-400"
                                    }`}>
                                    {convertTemp(val.temp)}°
                                </span>
                            </div>

                        </button>
                    );
                })}
            </div>
        </div>
    );
}
