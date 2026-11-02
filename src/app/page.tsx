import MainLayout from "@/components/layout/MainLayout";
import CurrentWeather from "@/components/weather/CurrentWeather";

export default function page() {
  return (
    <div>
      <MainLayout>
        <div className="min-h-screen border w-full">
          <div className="border h-[320px] w-full *:h-full *:border flex ">
            <div className="w-[500px]">
              <CurrentWeather/>
            </div>
            <div></div>
          </div>
          <div></div>
          <div></div>
        </div>
      </MainLayout>
    </div>
  )
}