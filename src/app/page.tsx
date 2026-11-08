"use client";

// وارد کردن کامپوننت‌های موردنیاز صفحه
import MainLayout from "@/components/layout/MainLayout";
import CurrentWeather from "@/components/weather/CurrentWeather";
import Forecast from "@/components/weather/Forecast";
import Location from "@/components/weather/Location";
import PrecipitationLevels from "@/components/weather/PrecipitationLevels";

// وارد کردن هوک مدیریت اطلاعات آب‌وهوا
import { useWeather } from "@/hooks/useWeather";

export default function Page() {
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
  } = useWeather();
  return (
    // ساختار اصلی صفحه و Layout
    <MainLayout>
      <div className="min-h-screen w-full  ">
        {/* ردیف اول: وضعیت فعلی آب‌وهوا */}
        <div className="flex h-[320px] gap-2 w-full *:h-full ">

          {/* کامپوننت وضعیت فعلی */}
          <div className="w-[860px]">
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
            />
          </div>

          {/* فضای سایر بخش‌های ردیف اول */}
          <div className="flex h-[300px] w-full  justify-end ">
            <div className="w-[740px]">
              <Forecast
                weather={weather}
                daily={daily}
                DailyIcon={DailyIcon}
              />
            </div>
          </div>
        </div>

        {/* ردیف دوم: پیش‌بینی آب‌وهوا */}
        <div className="flex h-[300px] w-full  mt-3 gap-10">
          {/* کامپوننت پیش‌بینی */}
          <div className=" w-[510px]">
            <Location
              onSelectCity={handleSelectCity}
            />
          </div>

          {/* فضاهای سایر بخش‌های ردیف دوم */}
          <div className="flex h-[300px] w-[480px] justify-end ">
            <PrecipitationLevels
              daily={daily}
            />
          </div>
          <div></div>
        </div>

        {/* فضای بخش‌های بعدی داشبورد */}
        <div></div>

      </div>
    </MainLayout>
  );
}