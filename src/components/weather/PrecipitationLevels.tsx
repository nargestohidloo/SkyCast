
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
        { id: 1, day: day?.[0], date: "", precipitation: precipitation?.[0] },
        { id: 2, day: day?.[1], date: "", precipitation: precipitation?.[1] },
        { id: 3, day: day?.[2], date: "", precipitation: precipitation?.[2] },
        { id: 4, day: day?.[3], date: "", precipitation: precipitation?.[3] },
        { id: 5, day: day?.[4], date: "", precipitation: precipitation?.[4] },
        { id: 6, day: day?.[5], date: "", precipitation: precipitation?.[5] },
        { id: 7, day: day?.[6], date: "", precipitation: precipitation?.[6] },
    ];

    return (
        <div className="w-full ml-3 rounded-2xl bg-white p-6 shadow-sm">

            {/* Header */}
            <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <Droplets size={20} className="text-blue-500" />
                </div>

                <div>
                    <h2 className="text-base font-semibold text-slate-800">
                        Precipitation Levels
                    </h2>
                    <p className="text-xs text-slate-400">
                        Weekly precipitation forecast
                    </p>
                </div>
            </div>

            {/* Chart */}
            <div className="flex items-end gap-3">

                {/* Percentage Labels */}
                <div className="flex h-35 flex-col justify-between text-[10px] text-slate-500 mb-5">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                </div>

                {/* Bars */}
                <div className="flex flex-1 flex-col gap-3">

                    {/* Values */}
                    <div className="flex justify-between gap-3">
                        {Mydata.map((val) => (
                            <div key={val.id} className="flex flex-1 justify-center text-[10px] font-semibold text-slate-600">
                                {val.precipitation ?? 0}
                                <span className="ml-0.5 text-[10px] text-slate-400 pl-0.5">
                                    mm
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Bar Area */}
                    <div className="flex h-32 items-end justify-between gap-3">

                        {Mydata.map((val) => {
                            const height = val.precipitation
                                ? (val.precipitation / maxPrecipitation) * 100
                                : 0;

                            return (
                                <div
                                    key={val.id}
                                    className="flex h-full flex-1 items-end justify-center"
                                >
                                    <div className="flex h-full w-full max-w-10 items-end justify-center overflow-hidden rounded-xl bg-blue-50/80">
                                        <div
                                            className="w-full rounded-xs bg-gradient-to-t from-blue-600 to-sky-700 shadow-sm transition-all duration-1000 ease-out"
                                            style={{ height: `${height}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Days */}
                    <div className="flex justify-between gap-3">
                        {Mydata.map((val) => (
                            <span
                                key={val.id}
                                className="flex-1 text-center text-xs font-medium text-slate-500"
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
