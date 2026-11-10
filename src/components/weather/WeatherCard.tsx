
import type { WeatherCardProps } from "@/types/types";
import { CalendarDays, Sunrise, Sunset } from "lucide-react";

export default function WeatherCard({ daily }: WeatherCardProps) {

    const MySunrise = daily?.sunrise?.[0]?.split("T")[1];
    const MySunset = daily?.sunset?.[0]?.split("T")[1];

    return (
        <div className="h-full w-full min-w-0 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm sm:ml-6 sm:w-[205px] sm:shrink-0 sm:p-5">

            {/* Header */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
                <CalendarDays size={22} className="shrink-0 text-blue-700" />
                <span className="text-base font-semibold text-blue-950">
                    Today
                </span>
            </div>

            {/* Sunrise & Sunset */}
            <div className="flex flex-col gap-3">

                {/* Sunrise */}
                <div className="flex h-[76px] items-center gap-3 rounded-2xl border border-blue-50 bg-white px-3 shadow-sm sm:gap-4 sm:px-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 sm:h-12 sm:w-12">
                        <Sunrise size={26} />
                    </div>

                    <div className="flex min-w-0 flex-col gap-1">
                        <span className="text-sm text-blue-900">
                            Sunrise
                        </span>

                        <span className="text-base font-semibold text-blue-600 sm:text-lg">
                            {MySunrise ?? "--:--"}
                        </span>
                    </div>

                </div>

                {/* Sunset */}
                <div className="flex h-[76px] items-center gap-3 rounded-2xl border border-blue-50 bg-white px-3 shadow-sm sm:gap-4 sm:px-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 sm:h-12 sm:w-12">
                        <Sunset size={26} />
                    </div>

                    <div className="flex min-w-0 flex-col gap-1">
                        <span className="text-sm text-blue-900">
                            Sunset
                        </span>

                        <span className="text-base font-semibold text-blue-600 sm:text-lg">
                            {MySunset ?? "--:--"}
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}
