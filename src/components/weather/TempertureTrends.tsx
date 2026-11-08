
"use client";

import type { TempertureTrendsProps } from "@/types/types";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

import { Thermometer } from "lucide-react";

export default function TempertureTrends({ hourly }: TempertureTrendsProps) {

    const chartData = hourly?.time.slice(0, 24).map((val, index) => ({
        time: new Date(val).toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true,
        }),
        temperature: hourly.temperature_2m[index],
    })) ?? [];

    return (
        <div className="h-full w-full rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

            {/* Header */}
            <div className="mb-5 flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <Thermometer size={25} className="text-blue-800" />

                    <h2 className="text-lg font-semibold text-blue-950">
                        Temperature Trend
                    </h2>
                </div>

                <div className="flex items-center rounded-full bg-blue-50 p-1">

                    <button className="rounded-full bg-blue-500 px-5 py-2 text-sm text-white shadow-sm">
                        Today
                    </button>

                    <button className="px-5 py-2 text-sm text-blue-700">
                        7 Days
                    </button>

                    <button className="px-5 py-2 text-sm text-blue-700">
                        30 Days
                    </button>

                </div>
            </div>

            {/* Chart */}
            <div className="h-[250px] w-full">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 5, left: 0, bottom: 0 }}
                    >

                        <defs>
                            <linearGradient
                                id="temperatureGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#2878FF"
                                    stopOpacity={0.25}
                                />

                                <stop
                                    offset="100%"
                                    stopColor="#2878FF"
                                    stopOpacity={0.02}
                                />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            stroke="#E5EDF8"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="time"
                            interval={2}
                            tick={{ fontSize: 10, fill: "#31558A" }}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={12}
                        />

                        <YAxis
                            domain={[0, 30]}
                            ticks={[0, 5, 10, 15, 20, 25, 30]}
                            tick={{ fontSize: 11, fill: "#31558A" }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => `${value}°`}
                            width={35}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#245A9D",
                                border: "none",
                                borderRadius: "10px",
                                color: "#fff",
                                fontSize: "12px",
                            }}
                            labelStyle={{ color: "#fff" }}
                            formatter={(value) => [`${value}°C`, "Temperature"]}
                        />

                        <Area
                            type="monotone"
                            dataKey="temperature"
                            stroke="#2878FF"
                            strokeWidth={2}
                            fill="url(#temperatureGradient)"
                            dot={{
                                r: 2.5,
                                fill: "#2878FF",
                                stroke: "#fff",
                                strokeWidth: 1,
                            }}
                            activeDot={{
                                r: 5,
                                fill: "#2878FF",
                                stroke: "#fff",
                                strokeWidth: 2,
                            }}
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}
