"use client";

// وارد کردن کامپوننت‌های موردنیاز صفحه
import MainLayout from "@/components/layout/MainLayout";
import CurrentWeather from "@/components/weather/CurrentWeather";
import Forecast from "@/components/weather/Forecast";

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
    Icon,
  } = useWeather();
  return (
    // ساختار اصلی صفحه و Layout
    <MainLayout>
      <div className="min-h-screen w-full border">

        {/* ردیف اول: وضعیت فعلی آب‌وهوا */}
        <div className="flex h-[320px] w-full border *:h-full *:border">

          {/* کامپوننت وضعیت فعلی */}
          <div className="w-[500px]">
            <CurrentWeather
              weather={weather}
              daily={daily}
              cityName={cityName}
              isCityModalOpen={isCityModalOpen}
              setIsCityModalOpen={setIsCityModalOpen}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              Icon={Icon}
            />
          </div>

          {/* فضای سایر بخش‌های ردیف اول */}
          <div></div>
        </div>

        {/* ردیف دوم: پیش‌بینی آب‌وهوا */}
        <div className="flex h-[300px] w-full border *:border">

          {/* کامپوننت پیش‌بینی */}
          <div className="w-[500px]">
            <Forecast />
          </div>

          {/* فضاهای سایر بخش‌های ردیف دوم */}
          <div></div>
          <div></div>
        </div>

        {/* فضای بخش‌های بعدی داشبورد */}
        <div></div>

      </div>
    </MainLayout>
  );
}