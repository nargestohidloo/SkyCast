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
  cityName?: string | undefined;
  isCityModalOpen?: boolean | undefined;
  setIsCityModalOpen?: ((value: boolean) => void) | undefined;
  searchQuery?: string | undefined;
  setSearchQuery?: ((value: string) => void) | undefined;
  handleSearch?: (() => void) | undefined;
  WeatherIcon?: LucideIcon | undefined;
  DailyIcon?: LucideIcon[] | undefined;
  handleSelectCity?: ((city: MyCity) => void) | undefined;
}

export type WeatherIconProps = {
  code: number;
  isDay: number;
};

export interface DailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
  precipitation_sum?: number[];
}



export type WeatherData = {
  daily: DailyWeather;
  current: {
    temperature_2m: number;
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    is_day: number;
  };
};

export type MyCity = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  maxTemp?: number;
  minTemp?: number;
  icon?: LucideIcon;
};

export type LocationProps = {
  onSelectCity?: ((city: MyCity) => void) | undefined;
};

export interface MainLayoutProps {
    children: React.ReactNode | undefined;
    searchQuery: string | undefined;
    setSearchQuery: ((value: string) => void) | undefined;
    handleSearch: (() => void) | undefined;
}

export interface HeaderProps {
    searchQuery: string | undefined;
    setSearchQuery: ((value: string) => void) | undefined;
    handleSearch: (() => void) | undefined;
}

export interface WeatherCardProps {
    daily: DailyWeather | null;
}

export interface WeatherCardProps {
    daily: DailyWeather | null ;
    
}
export interface HourlyWeather {
    time: string[];
    temperature_2m: number[];
}

export interface TempertureTrendsProps {
    hourly: HourlyWeather | null;
}