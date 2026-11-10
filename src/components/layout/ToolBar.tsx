import { WeatherApp } from "@/types/types";

export default function ToolBar({ title, des, icon }: WeatherApp) {
    const FirstIcon = icon;



    return (
        <div className="*:w-1/2 flex justify-between h-[65px]">
            <div className="flex items-center gap-2">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FirstIcon size={30} strokeWidth={1.8} />
                </div>

                <div>
                    <span className="text-[21px]">{title}</span>
                    <p className="text-[11px] text-gray-600">{des}</p>
                </div>
            </div>


        </div>
    );
}