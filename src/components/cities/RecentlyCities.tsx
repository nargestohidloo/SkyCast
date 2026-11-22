
import { Clock, History } from "lucide-react";

export default function RecentlyCities() {
    return (
        <div className="flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm max-lg:p-4">

            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500 max-lg:h-10 max-lg:w-10">
                    <Clock className="size-6 max-lg:size-5" strokeWidth={1.8} />
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-slate-800 max-lg:text-base">
                        Recently Viewed
                    </h3>
                    <p className="text-sm text-slate-500 max-lg:text-xs">
                        Your recently searched and viewed cities.
                    </p>
                </div>
            </div>

            {/* Empty State */}
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center max-lg:gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 max-lg:h-12 max-lg:w-12">
                    <History className="size-[26px] max-lg:size-5" />
                </div>

                <h4 className="text-base font-semibold text-slate-700 max-lg:text-sm">
                    No recent cities yet
                </h4>

                <p className="max-w-xs text-sm leading-6 text-slate-500 max-lg:text-xs max-lg:leading-5">
                    The cities you search for will appear here.
                </p>
            </div>

        </div>
    );
}
