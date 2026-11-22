
import { Heart } from "lucide-react";

export default function CityCard() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:gap-3 sm:p-6 lg:p-8">

            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500 sm:size-14 lg:size-16 lg:rounded-2xl">
                <Heart className="size-6 sm:size-[27px] lg:size-[30px]" strokeWidth={1.7} />
            </div>

            <h3 className="text-base font-semibold tracking-tight text-slate-800 sm:text-lg">
                No favorite cities yet
            </h3>

            <p className="max-w-sm text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                You have not added any cities to your favorites yet.
                Explore cities and add your favorites here.
            </p>

        </div>
    );
}
