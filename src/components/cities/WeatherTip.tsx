
import { Heart, MapPin } from "lucide-react";

export default function WeatherTip() {
    return (
        <div className="flex h-full w-full items-center justify-between gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 via-white to-blue-50 px-5 shadow-sm max-lg:gap-2 max-lg:px-3">

            {/* Icon */}
            <div className="flex m-2 h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-500 max-lg:h-10 max-lg:w-10">
                <Heart className="size-6 max-lg:size-5 " strokeWidth={1.8} />
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex items-center gap-2 max-lg:flex-wrap max-lg:gap-1">
                    <h3 className="text-sm font-bold text-slate-800 max-lg:text-xs">
                        Add Your Favorite Cities
                    </h3>

                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-600 max-lg:text-[9px]">
                        Quick Access
                    </span>
                </div>

                <p className="text-xs leading-5 text-slate-500 max-lg:text-[10px] max-lg:leading-4">
                    Save your favorite cities for quick access to their weather updates.
                </p>
            </div>

            {/* Decoration */}
            <MapPin
                size={38}
                strokeWidth={1.5}
                className="hidden shrink-0 text-blue-300 sm:block "
            />

        </div>
    );
}
