"use client";

import { useEffect, useState } from "react";

import { getWeather, searchCities } from "@/services/weather";

import type { CurrentWeather, DailyWeather } from "../types/types";

export function useWeather() {
    // اطلاعات وضعیت فعلی هوا
    const [weather, setWeather] = useState<CurrentWeather | null>(null);

    // اطلاعات پیش‌بینی روزانه
    const [daily, setDaily] = useState<DailyWeather | null>(null);

    // نام شهر انتخاب‌شده
    const [cityName, setCityName] = useState("Tehran");

    // اطلاعات مربوط به جست‌وجوی شهر
    const [searchQuery, setSearchQuery] = useState("");

    // وضعیت باز یا بسته بودن مودال جست‌وجو
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
        if (!searchQuery.trim()) {
            return;
        }
        const cities = await searchCities(searchQuery);

        if (cities.length === 0) {
            alert("City not found!");
            return;
        }
        const selectedCity = cities[0];
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

    return {
        weather,
        daily,
        cityName,
        isCityModalOpen,
        setIsCityModalOpen,
        searchQuery,
        setSearchQuery,
        handleSearch,
    };
}