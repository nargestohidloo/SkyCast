// وارد کردن نوع آیکون از کتابخانه Lucide
import type { LucideIcon } from "lucide-react";

// نوع اطلاعات آیتم‌های برنامه آب‌وهوا
export type WeatherApp = {
  title: string;
  des: string;
  icon: LucideIcon;
  loc?: string;
  showDate?: boolean;
};

// نوع اطلاعات آب‌وهوای فعلی
export interface CurrentWeather {
  time: string;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  is_day: number;
  weather_code: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
}

// نوع اطلاعات پیش‌بینی روزانه
export interface DailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
}

// نوع اطلاعات شهر
export interface City {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

// نوع Props کامپوننت CurrentWeather
export interface CurrentWeatherProps {
  weather: CurrentWeather | null;
  daily: DailyWeather | null;
  cityName: string;
  isCityModalOpen: boolean;
  setIsCityModalOpen: (value: boolean) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  handleSearch: () => void;
}