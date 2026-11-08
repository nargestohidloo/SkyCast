import { MainLayoutProps } from "@/types/types";
import Header from "./Header";
import SideBar from "./SideBar";

export default function MainLayout({ children, searchQuery, setSearchQuery, handleSearch, }: MainLayoutProps) {
    return (
        <div className="flex min-h-screen gap-3.5 bg-[#EAF2FF] p-3.5 ">
            {/* Sidebar */}

            <aside className="hidden w-[260px] shrink-0 rounded-[20px] bg-white p-2 lg:block">
                <SideBar />
            </aside>

            {/* Main Content */}

            <div className="flex min-w-0 flex-1 flex-col gap-3">
                {/* Header */}

                <Header
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearch={handleSearch}
                />
                {/* Page Content */}

                <main className="min-w-0 flex-1 ">
                    {children}
                </main>
            </div>
        </div>
    );
}