
import Image from "next/image";
import { MapPin, Plus } from "lucide-react";

export default function CutuesHeader() {
    return (
        <>
            <div className="w-full h-full relative flex overflow-hidden rounded-xl shadow-sm">
                <Image
                    src="/images/mountain.png"
                    alt="Mountain landscape"
                    fill
                    className="object-cover object-bottom absolute"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/20 to-transparent" />

                <div className="absolute left-7 top-1/2 z-10 flex -translate-y-1/2 items-center gap-4 max-lg:left-3 max-lg:gap-2">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-white shadow-lg backdrop-blur-md max-lg:h-10 max-lg:w-10 max-lg:rounded-xl">
                        <MapPin className="size-[26px] max-lg:size-5" strokeWidth={1.8} />
                    </span>

                    <div className="flex flex-col gap-1.5 max-lg:gap-1">
                        <span className="text-2xl font-bold tracking-tight text-white drop-shadow-md max-lg:text-base">
                            Your Cities
                        </span>

                        <p className="max-w-md text-sm font-medium leading-relaxed text-white/90 drop-shadow-sm max-lg:max-w-[180px] max-lg:text-[10px] max-lg:leading-4">
                            Manage your favorite cities and quickly check the weather.
                        </p>
                    </div>
                </div>

                <button className="absolute right-6 top-6 z-10 flex h-12 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/20 px-5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/35 hover:shadow-xl active:scale-95 max-lg:right-2 max-lg:top-2 max-lg:h-8 max-lg:gap-1 max-lg:rounded-lg max-lg:px-2 max-lg:text-[10px]">
                    <Plus className="size-[19px] max-lg:size-4" strokeWidth={2} />
                    <span>Add City</span>
                </button>
            </div>
        </>
    );
}
