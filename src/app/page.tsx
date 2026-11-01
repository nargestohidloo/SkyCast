import MainLayout from "@/components/layout/MainLayout";
import CurrentWeather from "@/components/weather/CurrentWeather";

export default function page() {
  return (
    <div>
      <MainLayout>
        <div className="min-h-screen border w-full">
          <div className="border h-[300px] w-full *:w-1/2 *:h-full *:border flex ">
            <div>
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