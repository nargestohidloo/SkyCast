import { Building2, MapPin } from "lucide-react";

export default function CityList() {
    return (
        <div className="flex  w-full flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-blue-200/10 p-8 text-center shadow-sm">

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
                <Building2 size={30} strokeWidth={1.7} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold tracking-tight text-slate-800">
                All Cities
            </h3>

            {/* Description */}
            <p className="max-w-sm text-sm leading-6 text-slate-500">
                Manage and explore all your added cities in one place.
            </p>

        </div>
    );
}