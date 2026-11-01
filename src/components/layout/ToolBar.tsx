import { weatherapp } from "@/types/types";
import { MapPin, ChevronDown, LocateFixed } from "lucide-react";

export default function ToolBar({ title, des, icon, loc, showDate }: weatherapp) {
    const FirstIcon = icon;

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

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

            {loc && (
                <div className="flex w-full items-center rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm ">
                    <div className="flex w-full items-center rounded-lg border border-slate-200 bg-white p-2">
                        <div className="flex w-1/2 items-center justify-between border-r border-slate-200 pr-3">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                    <MapPin size={17} />
                                </div>
                                <span className="text-xs font-medium text-slate-700">
                                    {loc}
                                </span>
                            </div>

                            <button type="button">
                                <ChevronDown size={18} />
                            </button>
                        </div>
                        {showDate ? (
                            <div className="flex w-1/2 items-center justify-center pl-3 text-xs text-slate-600">
                                {formattedDate}
                            </div>
                        ) : (
                            <div className="flex w-1/2 items-center justify-center pl-3 text-blue-600">
                                <LocateFixed size={20} strokeWidth={1.8} />
                            </div>
                        )}
                    </div>
                </div>
                )}
        </div>
    );
}