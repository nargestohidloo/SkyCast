
import { MainLayoutProps } from "@/types/types";
import Header from "./Header";
import SideBar from "./SideBar";

export default function MainLayout({
    children,
    searchQuery,
    setSearchQuery,
    handleSearch,
}: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-[#EAF2FF] p-3.5">

            {/* Sidebar */}
            <aside className="hidden fixed top-3.5 left-3.5 bottom-3.5 w-[260px] rounded-[20px] bg-white p-2 lg:block">
                <SideBar />
            </aside>

            {/* Main Content */}
            <div className="flex min-w-0 flex-col gap-3 lg:ml-[274px]">

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
