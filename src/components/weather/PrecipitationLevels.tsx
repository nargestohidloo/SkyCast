
"use client";

import type { DailyWeather } from "@/types/types";
import { Droplets } from "lucide-react";

type PrecipitationLevelsProps = {
    daily: DailyWeather | null;
};

export default function PrecipitationLevels({ daily }: PrecipitationLevelsProps) {

    const precipitation = daily?.precipitation_sum;

    const day = daily?.time.map((val) =>
        new Date(val).toLocaleDateString("en-US", {
            weekday: "short",
        })
    );

    const maxPrecipitation = Math.max(
        ...(precipitation ?? [0]),
        1
    );

    const Mydata = [
        { id: 1, day: day?.[0], precipitation: precipitation?.[0] },
        { id: 2, day: day?.[1], precipitation: precipitation?.[1] },
        { id: 3, day: day?.[2], precipitation: precipitation?.[2] },
        { id: 4, day: day?.[3], precipitation: precipitation?.[3] },
        { id: 5, day: day?.[4], precipitation: precipitation?.[4] },
        { id: 6, day: day?.[5], precipitation: precipitation?.[5] },
        { id: 7, day: day?.[6], precipitation: precipitation?.[6] },
    ];

    return (
        <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-white p-4 shadow-sm sm:p-6">

            {/* Header */}
            <div className="mb-5 flex items-center gap-3 sm:mb-8">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Droplets size={20} className="text-blue-500" />
                </div>

                <div className="min-w-0">
                    <h2 className="text-sm font-semibold text-slate-800 sm:text-base">
                        Precipitation Levels
                    </h2>
                    <p className="text-[10px] text-slate-400 sm:text-xs">
                        Weekly precipitation forecast
                    </p>
                </div>
            </div>

            {/* Chart */}
            <div className="flex min-w-0 items-end gap-1.5 sm:gap-3">

                {/* Percentage Labels */}
                <div className="mb-5 flex h-35 shrink-0 flex-col justify-between text-[9px] text-slate-500 sm:text-[10px]">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                </div>

                {/* Bars */}
                <div className="flex min-w-0 flex-1 flex-col gap-3">

                    {/* Values */}
                    <div className="flex justify-between gap-1 sm:gap-3">
                        {Mydata.map((val) => (
                            <div
                                key={val.id}
                                className="flex min-w-0 flex-1 justify-center text-[9px] font-semibold text-slate-600 sm:text-[10px]"
                            >
                                {val.precipitation ?? 0}
                                <span className="ml-0.5 hidden pl-0.5 text-[10px] text-slate-400 sm:inline">
                                    mm
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Bar Area */}
                    <div className="flex h-32 items-end justify-between gap-1 sm:gap-3">

                        {Mydata.map((val) => {
                            const height = val.precipitation
                                ? (val.precipitation / maxPrecipitation) * 100
                                : 0;

                            return (
                                <div
                                    key={val.id}
                                    className="flex h-full min-w-0 flex-1 items-end justify-center"
                                >
                                    <div className="flex h-full w-full max-w-10 items-end justify-center overflow-hidden rounded-xl bg-blue-50/80">
                                        <div
                                            className="w-full rounded-t-sm bg-gradient-to-t from-blue-600 to-sky-700 shadow-sm transition-all duration-1000 ease-out"
                                            style={{ height: `${height}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Days */}
                    <div className="flex justify-between gap-1 sm:gap-3">
                        {Mydata.map((val) => (
                            <span
                                key={val.id}
                                className="min-w-0 flex-1 text-center text-[9px] font-medium text-slate-500 sm:text-xs"
                            >
                                {val.day ?? "--"}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
