
"use client";

import type { HeaderProps } from "@/types/types";
import {
    Search,
    Sun,
    Moon,
    ChevronDown,
    UserRound,
    Bell,
} from "lucide-react";

export default function Header({
    searchQuery,
    setSearchQuery,
    handleSearch,
}: HeaderProps) {
    return (
        <header className="relative flex h-[60px] w-full min-w-0 items-center justify-between gap-2 rounded-2xl border border-blue-100 bg-white/90 px-2.5 shadow-sm sm:gap-3 sm:px-4 lg:px-5">

            {/* Search */}
            <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3 transition-all duration-200 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100/70 sm:max-w-[45%] sm:gap-3 sm:px-4">

                <button
                    type="button"
                    onClick={() => handleSearch?.()}
                    aria-label="Search"
                    className="shrink-0 text-blue-800 transition hover:text-blue-500"
                >
                    <Search size={18} />
                </button>

                <input
                    className="w-full min-w-0 bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400 sm:text-sm"
                    value={searchQuery ?? ""}
                    onChange={(e) => setSearchQuery?.(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch?.();
                    }}
                    type="text"
                    placeholder="Search city..."
                />
            </div>

            {/* Header Actions */}
            <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-3 lg:gap-4">

                {/* Theme */}
                <div className="flex items-center gap-0.5 rounded-full border border-blue-100 bg-blue-50/70 p-0.5 sm:gap-1 sm:p-1">
                    <button
                        aria-label="Light mode"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm transition hover:bg-blue-600 sm:h-9 sm:w-9"
                    >
                        <Sun size={17} />
                    </button>

                    <button
                        aria-label="Dark mode"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-white hover:text-indigo-500 sm:h-9 sm:w-9"
                    >
                        <Moon size={17} />
                    </button>
                </div>

                {/* Notifications */}
                <button
                    aria-label="Notifications"
                    className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-600 transition hover:bg-blue-50 sm:h-10 sm:w-10"
                >
                    <Bell size={19} />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </button>

                {/* Divider */}
                <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                {/* User */}
                <div className="flex shrink-0 items-center gap-2 rounded-xl sm:gap-3 sm:px-1">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 sm:h-10 sm:w-10">
                        <UserRound size={20} />
                    </div>

                    <div className="hidden min-w-0 sm:block">
                        <p className="whitespace-nowrap text-sm text-blue-950">
                            Narges Tohidloo
                        </p>
                    </div>

                    <ChevronDown
                        size={17}
                        className="hidden shrink-0 text-blue-800 sm:block"
                    />
                </div>

            </div>
        </header>
    );
}
