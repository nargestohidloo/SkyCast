
"use client";

import type { WeatherQualityProps } from "@/types/types";

import {
    Wind,
    Leaf,
    Sun,
    CheckCircle2,
    AlertTriangle,
} from "lucide-react";

export default function WeatherQuality({ airQuality }: WeatherQualityProps) {
    const aqi = airQuality?.european_aqi ?? 0;
    const uv = airQuality?.uv_index ?? 0;

    const aqiPercent = Math.min(Math.max(aqi, 0), 100);
    const uvPercent = Math.min(Math.max((uv / 11) * 100, 0), 100);

    const uvState =
        uv <= 2 ? "Low" :
        uv <= 5 ? "Moderate" :
        uv <= 7 ? "High" :
        uv <= 10 ? "Very High" :
        "Extreme";

    const aqiStatus =
        aqi <= 20 ? "Good" :
        aqi <= 40 ? "Fair" :
        aqi <= 60 ? "Moderate" :
        aqi <= 80 ? "Poor" :
        aqi <= 100 ? "Very Poor" :
        "Extremely Poor";

    const aqiDescription =
        aqi <= 20 ? "Air quality is good." :
        aqi <= 40 ? "Air quality is acceptable." :
        aqi <= 60 ? "Sensitive people should be cautious." :
        aqi <= 80 ? "Health effects may occur." :
        aqi <= 100 ? "Health alert: limit outdoor activity." :
        "Avoid outdoor activities if possible.";

    const uvDescription =
        uv <= 2 ? "No special sun protection needed." :
        uv <= 5 ? "Use sunscreen if outdoors." :
        uv <= 7 ? "Protection is needed outdoors." :
        uv <= 10 ? "Extra protection is essential." :
        "Avoid direct sunlight if possible.";

    const aqiColor =
        aqi <= 20 ? "text-green-600" :
        aqi <= 40 ? "text-lime-600" :
        aqi <= 60 ? "text-yellow-600" :
        aqi <= 80 ? "text-orange-600" :
        aqi <= 100 ? "text-red-600" :
        "text-red-800";

    const uvColor =
        uv <= 2 ? "text-green-600" :
        uv <= 5 ? "text-yellow-600" :
        uv <= 7 ? "text-orange-500" :
        uv <= 10 ? "text-red-600" :
        "text-purple-700";

    const aqiGaugeColor =
        aqi <= 20 ? "#16a34a" :
        aqi <= 40 ? "#65a30d" :
        aqi <= 60 ? "#ca8a04" :
        aqi <= 80 ? "#ea580c" :
        aqi <= 100 ? "#dc2626" :
        "#991b1b";

    const uvGaugeColor =
        uv <= 2 ? "#16a34a" :
        uv <= 5 ? "#ca8a04" :
        uv <= 7 ? "#ea580c" :
        uv <= 10 ? "#dc2626" :
        "#7e22ce";

    const aqiBadge =
        aqi <= 20 ? "No health risk" :
        aqi <= 40 ? "Acceptable air quality" :
        aqi <= 60 ? "Sensitive groups: Be cautious" :
        aqi <= 80 ? "Limit outdoor activity" :
        aqi <= 100 ? "Health alert" :
        "Avoid outdoor activity";

    const aqiBadgeColor =
        aqi <= 20 ? "bg-green-100 text-green-700" :
        aqi <= 40 ? "bg-lime-100 text-lime-700" :
        aqi <= 60 ? "bg-yellow-100 text-yellow-700" :
        aqi <= 80 ? "bg-orange-100 text-orange-700" :
        aqi <= 100 ? "bg-red-100 text-red-700" :
        "bg-red-200 text-red-800";

    const uvBadge =
        uv <= 2 ? "No protection needed" :
        uv <= 5 ? "SPF 30+ recommended" :
        uv <= 7 ? "Use SPF 30+ and seek shade" :
        uv <= 10 ? "Avoid midday sun" :
        "Avoid sun exposure";

    const uvBadgeColor =
        uv <= 2 ? "bg-green-100 text-green-700" :
        uv <= 5 ? "bg-yellow-100 text-yellow-700" :
        uv <= 7 ? "bg-orange-100 text-orange-700" :
        uv <= 10 ? "bg-red-100 text-red-700" :
        "bg-purple-100 text-purple-700";

    if (!airQuality) {
        return (
            <div className="flex h-full w-full items-center justify-center rounded-[20px] bg-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />

                    <p className="text-sm text-slate-500">
                        Loading air quality...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-[300px] rounded-[10px] border border-slate-200/80 bg-white p-3 sm:p-4 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">

            {/* Header */}
            <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Wind size={20} />
                </div>

                <h2 className="text-sm font-bold text-slate-800">
                    Air Quality & UV Index
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Air Quality */}
                <div className="m-2 flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-2.5">

                    <div className="mb-2 flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <Leaf size={16} />
                        </div>

                        <span className="text-xs font-bold text-slate-800">
                            Air Quality
                        </span>
                    </div>

                    <div className="flex items-center justify-center gap-3">

                        {/* Gauge */}
                        <div
                            className="relative flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full"
                            style={{
                                background: `conic-gradient(${aqiGaugeColor} 0% ${aqiPercent}%, #e2e8f0 ${aqiPercent}% 100%)`
                            }}
                        >
                            <div className="flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full bg-white">
                                <span className="text-3xl font-bold text-slate-800">
                                    {aqi}
                                </span>

                                <span className="text-[10px] font-semibold text-slate-500">
                                    AQI
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex flex-1 flex-col gap-1">
                            <span className={`text-lg font-bold ${aqiColor}`}>
                                {aqiStatus}
                            </span>

                            <p className="text-xs leading-5 text-slate-500">
                                {aqiDescription}
                            </p>
                        </div>
                    </div>

                    {/* AQI Badge */}
                    <div className={`mt-2 flex items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-[10px] font-semibold ${aqiBadgeColor}`}>
                        {aqi <= 40 ? (
                            <CheckCircle2 size={13} />
                        ) : (
                            <AlertTriangle size={13} />
                        )}

                        {aqiBadge}
                    </div>
                </div>

                {/* UV Index */}
                <div className="m-2 flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-2.5">

                    <div className="mb-2 flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                            <Sun size={17} />
                        </div>

                        <span className="text-xs font-bold text-slate-800">
                            UV Index
                        </span>
                    </div>

                    <div className="flex items-center justify-center gap-3">

                        {/* Gauge */}
                        <div
                            className="relative flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full"
                            style={{
                                background: `conic-gradient(${uvGaugeColor} 0% ${uvPercent}%, #e2e8f0 ${uvPercent}% 100%)`
                            }}
                        >
                            <div className="flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full bg-white">
                                <span className="text-3xl font-bold text-slate-800">
                                    {uv}
                                </span>

                                <span className="text-[10px] font-semibold text-slate-500">
                                    {uvState}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex flex-1 flex-col gap-1">
                            <span className={`text-lg font-bold ${uvColor}`}>
                                {uvState}
                            </span>

                            <p className="text-xs leading-5 text-slate-500">
                                {uvDescription}
                            </p>
                        </div>
                    </div>

                    {/* UV Badge */}
                    <div className={`mt-2 flex items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-[10px] font-semibold ${uvBadgeColor}`}>
                        {uv <= 2 ? (
                            <CheckCircle2 size={13} />
                        ) : (
                            <AlertTriangle size={13} />
                        )}

                        {uvBadge}
                    </div>
                </div>
            </div>
        </div>
    );
}
