import {
  Search,
  Sun,
  Moon,
  ChevronDown,
  UserRound,
  Bell,
} from "lucide-react";

export default function Header() {
  return (
    <div className="relative flex h-[60px] w-full items-center justify-between rounded-2xl border border-blue-100 bg-white/90 px-5 shadow-sm">

      {/* Search */}
      <div className="flex h-[42px] w-[400px] max-w-[45%] items-center gap-3 rounded-full border border-blue-100 bg-blue-50/50 px-4 transition-all duration-200 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100/70">
        <Search size={19} className="shrink-0 text-blue-800" />

        <input
          className="h-full w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          type="text"
          placeholder="Search city..."
        />
      </div>

      {/* Right Section */}
      <div className="ml-auto flex shrink-0 items-center gap-4">

        {/* Theme Toggle */}
        <div className="flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50/70 p-1">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm transition hover:bg-blue-600">
            <Sun size={19} />
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-white hover:text-indigo-500">
            <Moon size={19} />
          </button>
        </div>

        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-600 transition hover:bg-blue-50">
          <Bell size={21} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Divider */}
        <div className="h-10 w-px bg-slate-200" />

        {/* User Profile */}
        <div className="flex h-12 items-center gap-3 rounded-xl px-1">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <UserRound size={22} />
          </div>

          <div className="min-w-0">
            <p className="whitespace-nowrap text-sm font-semibold text-blue-950">
              Narges Tohidloo
            </p>
          </div>

          <ChevronDown
            size={17}
            className="shrink-0 text-blue-800"
          />

        </div>
      </div>
    </div>
  );
}
