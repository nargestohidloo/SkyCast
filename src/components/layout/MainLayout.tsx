
import type { MainLayoutProps } from "@/types/types";
import Header from "./Header";
import SideBar from "./SideBar";

export default function MainLayout({
    children,
    searchQuery,
    setSearchQuery,
    handleSearch,
}: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-[#EAF2FF] p-2 sm:p-3.5">

            {/* Sidebar / Mobile Navigation */}
            <aside className="fixed bottom-2 left-2 right-2 z-50 h-[68px] rounded-2xl bg-white p-2 shadow-lg lg:bottom-3.5 lg:left-3.5 lg:right-auto lg:top-3.5 lg:h-auto lg:w-[260px] lg:rounded-[20px] lg:p-2 lg:shadow-none">
                <SideBar />
            </aside>

            {/* Main Content */}
            <div className="flex min-w-0 flex-col gap-3 pb-[76px] lg:ml-[274px] lg:pb-0">
                <Header
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearch={handleSearch}
                />

                <main className="min-w-0 flex-1">
                    {children}
                </main>
            </div>

        </div>
    );
}
