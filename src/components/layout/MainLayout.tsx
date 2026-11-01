import Header from "./Header";
import SideBar from "./SideBar";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children, }: MainLayoutProps) {
    return (
        <div className="flex min-h-screen gap-3.5 bg-blue-50 p-3.5 ">
            {/* Sidebar */}

            <aside className="hidden w-[260px] shrink-0 rounded-[20px] bg-white p-2 lg:block">
                <SideBar />
            </aside>

            {/* Main Content */}

            <div className="flex min-w-0 flex-1 flex-col gap-3">
                {/* Header */}

                <header className="h-[60px] shrink-0">
                    <Header />
                </header>

                {/* Page Content */}

                <main className="min-w-0 flex-1 border">
                    {children}
                </main>
            </div>
        </div>
    );
}