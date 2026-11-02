import { LucideIcon } from "lucide-react";

export type weatherapp = {
    title: string;
    des: string;
    icon: LucideIcon;
    loc?: string;
    showDate?: boolean;
}

export interface CurrentWeather {
    time: string;
    temtemperature_2m: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
}
export interface DailyWeather {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
}
export interface searchCities {
    id: number;
    name: string;
    country: string;
    latitude: number;
    longitude: number;
}