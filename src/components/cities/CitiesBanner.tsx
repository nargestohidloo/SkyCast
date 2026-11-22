import Image from "next/image"
import { MapPin, Plus } from "lucide-react";

export default function CutuesHeader() {
    return (
        <>
            <div className="w-full h-full relative flex overflow-hidden rounded-xl shadow-sm">
                <Image
                    src="/images/mountain.png"
                    alt="Mountain landscape"
                    // *// fill: قابلیت Next.js برای پر کردن فضای والد.*
                    // *// در Next.js، وقتی به Image ویژگی fill می‌دی، خودش به‌صورت خودکار position: absolute می‌گیره.*
                    fill
                    className="object-cover object-bottom absolute"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/20 to-transparent" />

                <div className="absolute left-7 top-1/2 z-10 flex -translate-y-1/2 items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/40 bg-white/20 text-white shadow-lg backdrop-blur-md">
                        <MapPin size={26} strokeWidth={1.8} />
                    </span>

                    <div className="flex flex-col gap-1.5">
                        <span className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
                            Your Cities
                        </span>

                        <p className="max-w-md text-sm font-medium leading-relaxed text-white/90 drop-shadow-sm">
                            Manage your favorite cities and quickly check the weather.
                        </p>
                    </div>
                </div>

                <button className="absolute right-6 top-6 z-10 flex h-12 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/20 px-5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/35 hover:shadow-xl active:scale-95">
                    <Plus size={19} strokeWidth={2} />
                    <span>Add City</span>
                </button>
            </div>
        </>
    )
}
