"use client"
import { CurrentWeatherProps } from "@/types/types";
import { CalendarDays } from "lucide-react";
import { useState } from "react";


export default function Forecast({ weather, daily, DailyIcon }: CurrentWeatherProps) {

    const MyData = [
        { id: 1, name: daily ? new Date(daily.time[0]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: `${daily?.time[0]}`, icon: DailyIcon?.[0], temperture: "c", temp: "" },
        { id: 2, name: daily ? new Date(daily.time[1]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: `${daily?.time[1]}`, icon: DailyIcon?.[1], temperture: "c", temp: "" },
        { id: 3, name: daily ? new Date(daily.time[2]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: `${daily?.time[2]}`, icon: DailyIcon?.[2], temperture: "c", temp: "" },
        { id: 4, name: daily ? new Date(daily.time[3]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: `${daily?.time[3]}`, icon: DailyIcon?.[3], temperture: "c", temp: "" },
        { id: 5, name: daily ? new Date(daily.time[4]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: `${daily?.time[4]}`, icon: DailyIcon?.[4], temperture: "c", temp: "" },
        { id: 6, name: daily ? new Date(daily.time[5]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: `${daily?.time[5]}`, icon: DailyIcon?.[5], temperture: "c", temp: "" },
        { id: 7, name: daily ? new Date(daily.time[6]).toLocaleDateString("en-US", { weekday: "short" }) : "", date: `${daily?.time[6]}`, icon: DailyIcon?.[6], temperture: "c", temp: "" },
    ];
    const [isopen, setIsopen] = useState(1)
    return (
        <div className="w-full h-full rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">

                <div className="flex items-center gap-3 text-blue-950">
                    <CalendarDays size={22} className="text-blue-700" />
                    <span className="font-semibold">7-Day Forecast</span>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-blue-50 p-1">
                    <button className="rounded-full bg-blue-500 px-4 py-1.5 text-sm text-white shadow-sm">
                        °C
                    </button>
                    <button className="rounded-full px-4 py-1.5 text-sm text-blue-500 hover:bg-blue-100">
                        °F
                    </button>
                </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-7 gap-2">

                {MyData.map((val) => {
                    const Icon = val.icon
                    return (
                        <div
                            onClick={(() => {
                                setIsopen(val.id)
                            })}
                            key={val.id}
                            className={`flex h-[165px] min-w-0 flex-col items-center justify-center gap-3 rounded-2xl border p-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md 
                                ${isopen === val.id ? "border-blue-500 bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-md"
                                    : "border-blue-50 bg-white text-blue-950 hover:border-blue-200"
                                }`}
                        >

                            <span className="text-sm font-semibold">
                                {val.name}
                            </span>

                            <span className={`text-xs ${val.id === 1 ? "text-blue-100" : "text-slate-400"}`}>
                                {val.date}
                            </span>

                            <span>
                                {Icon && <Icon />}
                            </span>
                            <span className="text-lg font-bold">
                                {val.temperture}
                            </span>

                            <span className={`text-sm ${val.id === 1 ? "text-blue-100" : "text-slate-400"}`}>
                                {val.temp}
                            </span>

                        </div>
                    );
                })}

            </div>
        </div>
    );
}
