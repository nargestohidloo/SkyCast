import { getWeatherIcon } from "@/hooks/useWeather";
import { getWeather } from "@/services/weather";
import { LocationProps, MyCity, WeatherData } from "@/types/types";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
export default function Location({ onSelectCity }: LocationProps) {
    const [weather, setWeather] = useState<WeatherData[]>([]);

    const DailyIcon = weather.map((val) => {
        return getWeatherIcon(
            val.daily.weather_code[0],
            val.current.is_day
        );
    });
    const MyData = [
        { id: 1, name: "Tehran", icon: DailyIcon?.[0], latitude: 35.6892, longitude: 51.3890, maxTemp: weather[0]?.daily?.temperature_2m_max[0], minTemp: weather[0]?.daily?.temperature_2m_min[0], },
        { id: 2, name: "London", icon: DailyIcon?.[1], latitude: 51.5072, longitude: -0.1276, maxTemp: weather[1]?.daily?.temperature_2m_max[0], minTemp: weather[1]?.daily?.temperature_2m_min[0], },
        { id: 3, name: "Dubai", icon: DailyIcon?.[2], latitude: 25.2048, longitude: 55.2708, maxTemp: weather[2]?.daily?.temperature_2m_max[0], minTemp: weather[2]?.daily?.temperature_2m_min[0], },
        { id: 4, name: "Seoul", icon: DailyIcon?.[3], latitude: 37.5665, longitude: 126.9780, maxTemp: weather[3]?.daily?.temperature_2m_max[0], minTemp: weather[3]?.daily?.temperature_2m_min[0], },
    ];
    useEffect(() => {
        Promise.all(
            MyData.map((val) =>
                getWeather(val.latitude, val.longitude)
            )
        ).then((data) => {
            setWeather(data);
        });
    }, []);


    return (
        <div className="h-full w-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">

            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin size={19} className="text-blue-600" />

                    <h2 className="text-sm font-semibold text-slate-900">
                        Popular cities
                    </h2>
                </div>

                <button className="text-xs font-medium text-blue-500 transition hover:text-blue-700">
                    View all
                </button>
            </div>

            {/* Cities */}
            <div className="flex flex-col">
                {MyData.map((val) => {
                    const Icon = val.icon;

                    return (
                        <div
                            key={val.id}
                            className="flex text-[14px] h-[55px] w-full items-center justify-between rounded-lg border-b border-slate-100 px-3 transition hover:bg-blue-50/50"
                        >
                            <span className="font-medium text-slate-800">
                                {val.name}
                            </span>

                            <div className="flex items-center gap-3">
                                <span className="text-base">
                                    {Icon && <Icon className="text-blue-500" />}
                                </span>

                                <span className="text-xs font-semibold text-slate-800">
                                    {val.maxTemp}°
                                </span>

                                <span className="text-xs text-slate-400">
                                    {val.minTemp}°
                                </span>
                                <button
                                    onClick={() => onSelectCity && (onSelectCity(val))}
                                    className="text-xs text-slate-400 hover:text-blue-500 transition">
                                    see more
                                </button>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
