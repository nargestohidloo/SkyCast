
import { Heart, MapPin } from "lucide-react";

export default function WeatherTip() {
    return (
        <div className="flex h-full w-full items-center justify-between gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 via-white to-blue-50 px-5 shadow-sm">

            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-500">
                <Heart size={24} strokeWidth={1.8} />
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-800">
                        Add Your Favorite Cities
                    </h3>

                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-600">
                        Quick Access
                    </span>
                </div>

                <p className="text-xs leading-5 text-slate-500">
                    Save your favorite cities for quick access to their weather updates.
                </p>
            </div>

            {/* Decoration */}
            <MapPin
                size={38}
                strokeWidth={1.5}
                className="hidden shrink-0 text-blue-300 sm:block"
            />

        </div>
    );
}
