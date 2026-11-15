"use client";
import type { WeatherQualityProps } from "@/types/types";

import {
    Wind,
    Leaf,
    Sun,
    CheckCircle2,
    AlertTriangle,
} from "lucide-react"

export default function WeatherQuality({ airQuality, daily, selectedDay, Myaqi }: WeatherQualityProps) {
    const aqi = airQuality?.european_aqi ?? 0;
    const uv = airQuality?.uv_index ?? 0;
    console.log(Myaqi);
    const selectedDate = daily?.time[selectedDay];

    const mydata = Myaqi?.time?.map((time, index) => ({
        time: time,
        aqi: Myaqi.european_aqi[index]
    })).filter((item) => item.time.split("T")[0] === selectedDate) ?? [];
    console.log(mydata);

    
    const TheEndaqi = Math.max(...mydata.map((item) => item.aqi ?? 0));
  
    // هم روش ساعتی گرفت دارههم پیش بینی. من یکیشو ساعتی گرفتم یکیشو پیش بینی
    const weeklyUVData = daily?.uv_index_max?.map((val, index) => ({
        uv: val,
        date: daily.time[index],
    })) ?? [];


    const DeafaultUV = selectedDay === 0 ? uv : weeklyUVData[selectedDay]?.uv ?? 0;
    const DeafaultAQI = selectedDay === 0 ? aqi : TheEndaqi ?? 0;
    const aqiPercent = Math.min(Math.max(DeafaultAQI, 0), 100);
    const uvPercent = Math.min(Math.max((DeafaultUV / 11) * 100, 0), 100);



    const uvState =
        DeafaultUV <= 2 ? "Low" :
            DeafaultUV <= 5 ? "Moderate" :
                DeafaultUV <= 7 ? "High" :
                    DeafaultUV <= 10 ? "Very High" :
                        "Extreme";

    const aqiStatus =
        DeafaultAQI <= 20 ? "Good" :
            DeafaultAQI <= 40 ? "Fair" :
                DeafaultAQI <= 60 ? "Moderate" :
                    DeafaultAQI <= 80 ? "Poor" :
                        DeafaultAQI <= 100 ? "Very Poor" :
                            "Extremely Poor";

    const aqiDescription =
        DeafaultAQI <= 20 ? "Air quality is good." :
            DeafaultAQI <= 40 ? "Air quality is acceptable." :
                DeafaultAQI <= 60 ? "Sensitive people should be cautious." :
                    DeafaultAQI <= 80 ? "Health effects may occur." :
                        DeafaultAQI <= 100 ? "Health alert: limit outdoor activity." :
                            "Avoid outdoor activities if possible.";

    const uvDescription =
        DeafaultUV <= 2 ? "No special sun protection needed." :
            DeafaultUV <= 5 ? "Use sunscreen if outdoors." :
                DeafaultUV <= 7 ? "Protection is needed outdoors." :
                    DeafaultUV <= 10 ? "Extra protection is essential." :
                        "Avoid direct sunlight if possible.";

    const aqiColor =
        DeafaultAQI <= 20 ? "text-green-600" :
            DeafaultAQI <= 40 ? "text-lime-600" :
                DeafaultAQI <= 60 ? "text-yellow-600" :
                    DeafaultAQI <= 80 ? "text-orange-600" :
                        DeafaultAQI <= 100 ? "text-red-600" :
                            "text-red-800";

    const uvColor =
        DeafaultUV <= 2 ? "text-green-600" :
            DeafaultUV <= 5 ? "text-yellow-600" :
                DeafaultUV <= 7 ? "text-orange-500" :
                    DeafaultUV <= 10 ? "text-red-600" :
                        "text-purple-700";

    const aqiGaugeColor =
        DeafaultAQI <= 20 ? "#16a34a" :
            DeafaultAQI <= 40 ? "#65a30d" :
                DeafaultAQI <= 60 ? "#ca8a04" :
                    DeafaultAQI <= 80 ? "#ea580c" :
                        DeafaultAQI <= 100 ? "#dc2626" :
                            "#991b1b";

    const uvGaugeColor =
        DeafaultUV <= 2 ? "#16a34a" :
            DeafaultUV <= 5 ? "#ca8a04" :
                DeafaultUV <= 7 ? "#ea580c" :
                    DeafaultUV <= 10 ? "#dc2626" :
                        "#7e22ce";

    const aqiBadge =
        DeafaultAQI <= 20 ? "No health risk" :
            DeafaultAQI <= 40 ? "Acceptable air quality" :
                DeafaultAQI <= 60 ? "Sensitive groups: Be cautious" :
                    DeafaultAQI <= 80 ? "Limit outdoor activity" :
                        DeafaultAQI <= 100 ? "Health alert" :
                            "Avoid outdoor activity";

    const aqiBadgeColor =
        DeafaultAQI <= 20 ? "bg-green-100 text-green-700" :
            DeafaultAQI <= 40 ? "bg-lime-100 text-lime-700" :
                DeafaultAQI <= 60 ? "bg-yellow-100 text-yellow-700" :
                    DeafaultAQI <= 80 ? "bg-orange-100 text-orange-700" :
                        DeafaultAQI <= 100 ? "bg-red-100 text-red-700" :
                            "bg-red-200 text-red-800";

    const uvBadge =
        DeafaultUV <= 2 ? "No protection needed" :
            DeafaultUV <= 5 ? "SPF 30+ recommended" :
                DeafaultUV <= 7 ? "Use SPF 30+ and seek shade" :
                    DeafaultUV <= 10 ? "Avoid midday sun" :
                        "Avoid sun exposure";

    const uvBadgeColor =
        DeafaultUV <= 2 ? "bg-green-100 text-green-700" :
            DeafaultUV <= 5 ? "bg-yellow-100 text-yellow-700" :
                DeafaultUV <= 7 ? "bg-orange-100 text-orange-700" :
                    DeafaultUV <= 10 ? "bg-red-100 text-red-700" :
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
        <div className="min-h-[300px] w-full min-w-0 overflow-hidden rounded-[10px] border border-slate-200/80 bg-white p-3 shadow-[0_8px_30px_rgba(30,64,175,0.06)] sm:p-4">

            {/* Header */}
            <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Wind size={20} />
                </div>

                <h2 className="text-sm font-bold text-slate-800 sm:text-base">
                    Air Quality & UV Index
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Air Quality */}
                <div className="m-1 flex min-w-0 flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-2.5 sm:m-2">

                    <div className="mb-2 flex items-center gap-2">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <Leaf size={16} />
                        </div>

                        <span className="text-xs font-bold text-slate-800">
                            Air Quality
                        </span>
                    </div>

                    <div className="flex min-w-0 items-center justify-center gap-2 sm:gap-3">

                        {/* Gauge */}
                        <div
                            className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full sm:h-[88px] sm:w-[88px]"
                            style={{
                                background: `conic-gradient(${aqiGaugeColor} 0% ${aqiPercent}%, #e2e8f0 ${aqiPercent}% 100%)`
                            }}
                        >
                            <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white sm:h-[72px] sm:w-[72px]">
                                <span className="text-2xl font-bold text-slate-800 sm:text-3xl">
                                    {DeafaultAQI}
                                </span>

                                <span className="text-[10px] font-semibold text-slate-500">
                                    AQI
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                            <span className={`text-base font-bold sm:text-lg ${aqiColor}`}>
                                {aqiStatus}
                            </span>

                            <p className="text-[11px] leading-5 text-slate-500 sm:text-xs">
                                {aqiDescription}
                            </p>
                        </div>
                    </div>

                    {/* AQI Badge */}
                    <div className={`mt-2 flex min-w-0 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-center text-[9px] font-semibold sm:text-[10px] ${aqiBadgeColor}`}>
                        {DeafaultAQI <= 40 ? (
                            <CheckCircle2 size={13} className="shrink-0" />
                        ) : (
                            <AlertTriangle size={13} className="shrink-0" />
                        )}

                        {aqiBadge}
                    </div>
                </div>

                {/* UV Index */}
                <div className="m-1 flex min-w-0 flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-2.5 sm:m-2">

                    <div className="mb-2 flex items-center gap-2">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                            <Sun size={17} />
                        </div>

                        <span className="text-xs font-bold text-slate-800">
                            UV Index
                        </span>
                    </div>

                    <div className="flex min-w-0 items-center justify-center gap-2 sm:gap-3">

                        {/* Gauge */}
                        <div
                            className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full sm:h-[88px] sm:w-[88px]"
                            style={{
                                background: `conic-gradient(${uvGaugeColor} 0% ${uvPercent}%, #e2e8f0 ${uvPercent}% 100%)`
                            }}
                        >
                            <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white sm:h-[72px] sm:w-[72px]">
                                <span className="text-2xl font-bold text-slate-800 sm:text-3xl">
                                    {DeafaultUV}
                                </span>

                                <span className="text-[10px] font-semibold text-slate-500">
                                    {uvState}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                            <span className={`text-base font-bold sm:text-lg ${uvColor}`}>
                                {uvState}
                            </span>

                            <p className="text-[11px] leading-5 text-slate-500 sm:text-xs">
                                {uvDescription}
                            </p>
                        </div>
                    </div>

                    {/* UV Badge */}
                    <div className={`mt-2 flex min-w-0 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-center text-[9px] font-semibold sm:text-[10px] ${uvBadgeColor}`}>
                        {DeafaultUV <= 2 ? (
                            <CheckCircle2 size={13} className="shrink-0" />
                        ) : (
                            <AlertTriangle size={13} className="shrink-0" />
                        )}

                        {uvBadge}
                    </div>
                </div>
            </div>
        </div>
    );
}
