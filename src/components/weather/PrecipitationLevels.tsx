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
    ); console.log("my day" + day);


    const Mydata = [
        { id: 1, day: day?.[0], date: "", precipitation: precipitation?.[0] },
        { id: 2, day: day?.[1], date: "", precipitation: precipitation?.[1] },
        { id: 3, day: day?.[2], date: "", precipitation: precipitation?.[2] },
        { id: 4, day: day?.[3], date: "", precipitation: precipitation?.[3] },
        { id: 5, day: day?.[4], date: "", precipitation: precipitation?.[4] },
        { id: 6, day: day?.[5], date: "", precipitation: precipitation?.[5] },
        { id: 7, day: day?.[6], date: "", precipitation: precipitation?.[6] },
    ]
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm w-full">

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
            <div className="flex h-42 items-end justify-between gap-3">

                {Mydata.map((val) => {
                    const height = val.precipitation && (
                        (val.precipitation * 100) / 30
                    );

                    return (
                        <div
                            key={val.id}
                            className="group flex h-full flex-1 flex-col items-center justify-end gap-3"
                        >
                            {/* Value */}
                            <span className="text-xs font-semibold text-slate-600 transition-colors group-hover:text-blue-600">
                                {val.precipitation}
                                <span className="ml-0.5 text-[10px] text-slate-400">mm</span>
                            </span>

                            {/* Bar */}
                            <div className="flex h-32 w-full max-w-10 items-end justify-center overflow-hidden rounded-xl bg-blue-50/80">
                                <div
                                    className="w-full h-0 transition-discrete rounded-xs bg-gradient-to-t from-blue-600 to-sky-700 shadow-sm transition-all duration-500 group-hover:from-blue-700 group-hover:to-sky-300"
                                    style={{ height: `${height}%` }}
                                />
                            </div>

                            {/* Day */}
                            <span className="text-xs font-medium text-slate-500 transition-colors group-hover:text-blue-600">
                                {val.day}
                            </span>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}