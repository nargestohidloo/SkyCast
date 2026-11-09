import type { WeatherCardProps } from "@/types/types";
import { CalendarDays, Sunrise, Sunset } from "lucide-react";

export default function WeatherCard({ daily }: WeatherCardProps) {

    const MySunrise = daily?.sunrise?.[0]?.split("T")[1];
    const MySunset = daily?.sunset?.[0]?.split("T")[1];

    return (
        <div className="h-full ml-6 w-full rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
                <CalendarDays size={22} className="text-blue-700" />
                <span className="text-base font-semibold text-blue-950">
                    Today
                </span>
            </div>

            {/* Sunrise & Sunset */}
            <div className="flex flex-col gap-3">

                {/* Sunrise */}
                <div className="flex h-[76px] items-center gap-4 rounded-2xl border border-blue-50 bg-white px-4 shadow-sm">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                        <Sunrise size={29} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-blue-900">
                            Sunrise
                        </span>

                        <span className="text-lg font-semibold text-blue-600">
                            {MySunrise ?? "--:--"}
                        </span>
                    </div>

                </div>

                {/* Sunset */}
                <div className="flex h-[76px] items-center gap-4 rounded-2xl border border-blue-50 bg-white px-4 shadow-sm">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                        <Sunset size={29} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-blue-900">
                            Sunset
                        </span>

                        <span className="text-lg font-semibold text-blue-600">
                            {MySunset ?? "--:--"}
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}