
import type { WeatherApp } from "@/types/types";

export default function ToolBar({
    title,
    des,
    icon: FirstIcon,
}: WeatherApp) {
    return (
        <div className="flex min-h-[65px] w-full items-center justify-between gap-2">

            <div className="flex min-w-0 items-center gap-2 sm:gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 sm:h-11 sm:w-11">
                    <FirstIcon
                        size={24}
                        strokeWidth={1.8}
                        className="sm:h-[30px] sm:w-[30px]"
                    />
                </div>

                <div className="min-w-0">
                    <span className="text-lg text-blue-950 sm:text-[21px]">
                        {title}
                    </span>

                    <p className="text-[10px] text-gray-600 sm:text-[11px]">
                        {des}
                    </p>
                </div>

            </div>
        </div>
    );
}
