
"use client";
import { useEffect, useState } from "react";
import { getWeather, searchCities } from "@/services/weather";
import type { CurrentWeather, DailyWeather, MyCity } from "../types/types";
import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, CloudSun, Moon, Sun, } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// انتخاب آیکون متناسب با وضعیت آب‌وهوا
export function getWeatherIcon(code: number, isDay?: number): LucideIcon {
    switch (code) {
        case 0:
            return isDay ? Sun : Moon;

        case 1:
        case 2:
            return isDay ? CloudSun : Cloud;

        case 3:
            return Cloud;

        case 45:
        case 48:
            return CloudFog;

        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            return CloudDrizzle;

        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
            return CloudRain;

        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return CloudSnow;

        case 95:
        case 96:
        case 99:
            return CloudLightning;

        default:
            return Cloud;
    }
}

export function useWeather() {
    // اطلاعات وضعیت فعلی هوا
    const [weather, setWeather] = useState<CurrentWeather | null>(null);

    // اطلاعات پیش‌بینی روزانه
    const [daily, setDaily] = useState<DailyWeather | null>(null);

    // نام شهر انتخاب‌شده
    const [cityName, setCityName] = useState("Tehran");

    // اطلاعات جست‌وجوی شهر
    const [searchQuery, setSearchQuery] = useState("");

    // وضعیت مودال جست‌وجو
    const [isCityModalOpen, setIsCityModalOpen] = useState(false);


    // دریافت اطلاعات اولیه آب‌وهوا
    useEffect(() => {
        getWeather(35.667652, 51.403595).then((data) => {
            setWeather(data.current);
            setDaily(data.daily);
        });
    }, []);


    // جست‌وجوی شهر و دریافت آب‌وهوای آن
    async function handleSearch() {
        
        if (!searchQuery.trim()) return;
        const cities = await searchCities(searchQuery);
        if (cities.length === 0) {
            alert("City not found!");
            return;
        }
        const selectedCity = cities[0];
        console.log("Search coordinates:", selectedCity.latitude, selectedCity.longitude);
        const data = await getWeather(
            selectedCity.latitude,
            selectedCity.longitude
        );
        setWeather(data.current);
        setDaily(data.daily);
        setCityName(selectedCity.name);
        // بستن مودال بعد از جست‌وجوی موفق
        setIsCityModalOpen(false);
    }


    // تا زمان دریافت اطلاعات، مقدارهای اولیه برگردانده می‌شوند
    if (!weather || !daily) {
        return {
            weather: null,
            daily: null,
            
        };
    }

    // انتخاب آیکون بر اساس وضعیت هوا
    const WeatherIcon = getWeatherIcon(
        weather.weather_code,
        weather.is_day
    );
      async function handleSelectCity(city: MyCity) {
        const data = await getWeather(
            city.latitude,
            city.longitude
        );
        

        setWeather(data.current);
        setDaily(data.daily);
        setCityName(city.name);
    }

    const DailyIcon = daily.weather_code.map((val) => {
        return getWeatherIcon(val,1)
    })

    return {
        weather,
        daily,
        cityName,
        isCityModalOpen,
        setIsCityModalOpen,
        searchQuery,
        setSearchQuery,
        handleSearch,
        WeatherIcon,
        DailyIcon,
        handleSelectCity
    };
}
