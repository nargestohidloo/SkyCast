
import { MapPin, Search, Plus } from "lucide-react";

const MyData = ["Tehran", "London", "Tokyo", "Paris", "New York", "Dubai"];

export default function SearchCities() {
    return (
        <div className="flex w-full flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm max-lg:gap-4 max-lg:p-4">

            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-500 max-lg:h-10 max-lg:w-10">
                    <MapPin className="size-[22px] max-lg:size-5" strokeWidth={1.8} />
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-slate-800">
                        Quick Add
                    </h3>
                    <p className="text-xs text-slate-400">
                        Search and add your favorite cities
                    </p>
                </div>
            </div>

            <div className="flex h-11 w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 transition-colors focus-within:border-blue-400 focus-within:bg-white max-lg:h-10">
                <Search className="size-[19px] shrink-0 text-slate-400" />

                <input
                    type="text"
                    placeholder="Search for a city..."
                    className="h-full w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">
                        Popular Cities
                    </span>
                    <span className="text-xs text-slate-400">
                        {MyData.length} cities
                    </span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {MyData.map((val) => {
                        return (
                            <button
                                key={val}
                                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 max-lg:px-2.5 max-lg:py-1.5 max-lg:text-xs"
                            >
                                <MapPin className="size-[15px] text-blue-400 max-lg:size-3" />
                                {val}
                                <Plus className="size-[14px] text-slate-400 max-lg:size-3" />
                            </button>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}
