const API_URL =
    "https://api.open-meteo.com/v1/forecast?latitude=35.667652&longitude=51.403595&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto";

export async function getWeather() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

export async function searchCities(city: string) {
    // بررسی خالی نبودن ورودی
    if (!city) {
        return [];
    }

    // ارسال درخواست به API
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=10&language=en&format=json`
    );

    // بررسی موفقیت درخواست
    if (!response.ok) {
        throw new Error("Failed to search cities");
    }

    // تبدیل پاسخ به JSON
    const data = await response.json();

    // برگرداندن نتایج شهرها
    return data.results ?? [];
}

