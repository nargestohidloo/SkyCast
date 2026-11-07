import type { DailyWeather } from "@/types/types";

type PrecipitationLevelsProps = {
    daily: DailyWeather | null;
};

export default function PrecipitationLevels({ daily }: PrecipitationLevelsProps) {
    const precipitation = daily?.precipitation_sum;
    console.log(daily?.precipitation_sum); 
    return (
        <div>
            
        </div>
    );
}