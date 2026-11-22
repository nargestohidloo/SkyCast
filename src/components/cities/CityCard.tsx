import { Heart } from "lucide-react";

export default function CityCard() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
                <Heart size={30} strokeWidth={1.7} />
            </div>

            <h3 className="text-lg font-semibold tracking-tight text-slate-800">
                No favorite cities yet
            </h3>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
                You have not added any cities to your favorites yet.
                Explore cities and add your favorites here.
            </p>

        </div>
    );
}
