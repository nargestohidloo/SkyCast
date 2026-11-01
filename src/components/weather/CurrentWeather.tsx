import { MapPin, Sun } from "lucide-react";
export default function CurrentWeather() {
    return (
        <div className="w-full h-full border rounded-2xl bg-blue-300">
            <div className="flex items-center p-4 text-[14px] justify-between">
                <div className="flex items-center justify-between w-full">
                    {/* City Information */}
                    <div className="flex items-center gap-3">
                        <MapPin size={26} className="text-white" />

                        <div className="flex flex-col gap-1">
                            <span className="text-xl font-semibold text-white">
                                Tehran
                            </span>

                            <p className="text-xs text-white/70">
                                Saturday, 1 June 2024
                            </p>
                        </div>
                    </div>

                    {/* Change City */}
                    <button className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-xs text-white transition hover:bg-white/20">
                        <MapPin size={16} />
                        <span>Change city</span>
                    </button>
                </div>
            </div>
            {/* Weather Information */}
            <div className="flex items-center justify-between px-8 py-5 text-white">
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-white/80">Current Temperature</span>

                    <h2 className="text-7xl font-light leading-none tracking-tight">
                        24°
                    </h2>

                    <p className="text-base font-medium">Partly Cloudy</p>

                    <div className="flex items-center gap-3 text-sm text-white/80">
                        <span>H: 26°</span>
                        <span className="h-1 w-1 rounded-full bg-white/60" />
                        <span>L: 18°</span>
                    </div>
                </div>

                <Sun size={100} strokeWidth={1.2} className="text-white/90" />
            </div>
            <div></div>
        </div>
    )
}
