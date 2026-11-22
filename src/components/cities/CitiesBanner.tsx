import Image from "next/image"
import { MapPin } from "lucide-react";
export default function CutuesHeader() {
    return (
        <>
            <div className="w-full h-full relative  ">
                <Image
                    src="/images/mountain.png"
                    alt="Mountain landscape"
                    // fill: قابلیت Next.js برای پر کردن فضای والد.
                    // در Next.js، وقتی به Image ویژگی fill می‌دی، خودش به‌صورت خودکار position: absolute می‌گیره.
                    fill
                    className="object-cover object-bottom absolute rounded-[10px]"
                />
                <div className="absolute left-6 top-1/2 z-10 flex -translate-y-1/2 items-center gap-4">

                    {/* Location Icon */}
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/20 text-white backdrop-blur-md">
                        <MapPin size={28} strokeWidth={1.8} className="text-blue-900" />
                    </span>

                    {/* Text Content */}
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-semibold text-blue-900">
                            Your Cities
                        </span>

                        <p className="text-sm text-white/70">
                            Manage your favorite cities and quickly check the weather.
                        </p>
                    </div>

                </div>
                <button>
                    <span></span>
                    <span>Add City</span>
                </button>
            </div>

        </>
    )
}
