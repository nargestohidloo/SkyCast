
"use client";

// وارد کردن کامپوننت‌های موردنیاز صفحه
import MainLayout from "@/components/layout/MainLayout";
import CurrentWeather from "@/components/weather/CurrentWeather";
import Forecast from "@/components/weather/Forecast";
import Location from "@/components/weather/Location";
import PrecipitationLevels from "@/components/weather/PrecipitationLevels";
import TempertureTrends from "@/components/weather/TempertureTrends";
import WeatherCard from "@/components/weather/WeatherCard";
import WeatherQuality from "@/components/weather/WeatherQuality";

// وارد کردن هوک مدیریت اطلاعات آب‌وهوا
import { useWeather } from "@/hooks/useWeather";
import { useState } from "react";

export default function Page() {


  const [selectedDay, setSelectedDay] = useState(0);
  // اجرای هوک و دریافت اطلاعات و توابع موردنیاز
  const {
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
    handleSelectCity,
    hourly,
    airQuality,
    timezone
  } = useWeather();

  return (
    // ساختار اصلی صفحه و Layout
    <MainLayout
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      handleSearch={handleSearch}
    >
      <div className="w-full min-w-0 space-y-4">

        {/* ردیف اول: وضعیت فعلی آب‌وهوا */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">

          {/* کامپوننت وضعیت فعلی */}
          <div className="h-full min-w-0">
            <CurrentWeather
              weather={weather}
              daily={daily}
              cityName={cityName}
              isCityModalOpen={isCityModalOpen}
              setIsCityModalOpen={setIsCityModalOpen}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              WeatherIcon={WeatherIcon}
              selectedDay={selectedDay}
              hourly={hourly}
              timezone={timezone}

            />
          </div>

          {/* نمودار تغییرات دما */}
          <div className="h-full min-w-0">
            <TempertureTrends
              hourly={hourly}
              daily={daily}
            />
          </div>
        </div>

        {/* ردیف دوم: پیش‌بینی و شهرها */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,380px)_minmax(0,205px)]">
          {/* پیش‌بینی هفتگی */}
          <div className="h-full min-w-0 md:col-span-2 xl:col-span-1">
            <Forecast
              daily={daily}
              DailyIcon={DailyIcon}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          </div>

          {/* شهرهای محبوب */}
          <div className="h-full min-w-0">
            <Location
              onSelectCity={handleSelectCity}
            />
          </div>

          {/* اطلاعات طلوع و غروب */}
          <div className="h-full min-w-0">
            <WeatherCard
              daily={daily}
              selectedDay={selectedDay}
            />
          </div>
        </div>

        {/* ردیف سوم: بارش و کیفیت هوا */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,480px)_minmax(0,1fr)]">

          {/* میزان بارش */}
          <div className="h-full min-w-0">
            <PrecipitationLevels
              daily={daily}
            />
          </div>

          {/* کیفیت هوا */}
          <div className="h-full min-w-0">
            <WeatherQuality
              airQuality={airQuality}
            />
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
