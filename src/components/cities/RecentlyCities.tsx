import { Clock, History } from "lucide-react";

export default function RecentlyCities() {
    return (
        <div className="flex h-full w-full flex-col  rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                    <Clock size={24} strokeWidth={1.8} />
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-slate-800">
                        Recently Viewed
                    </h3>
                    <p className="text-sm text-slate-500">
                        Your recently searched and viewed cities.
                    </p>
                </div>
            </div>

            {/* Empty State */}
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                    <History size={26} />
                </div>

                <h4 className="text-base font-semibold text-slate-700">
                    No recent cities yet
                </h4>

                <p className="max-w-xs text-sm leading-6 text-slate-500">
                    The cities you search for will appear here.
                </p>
            </div>

        </div>
    );
}