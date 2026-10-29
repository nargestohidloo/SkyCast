import Header from "./Header";
import SideBar from "./SideBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen border flex p-3.5 bg-blue-50 *:p-2 *:rounded-[20px]">
            <div className="w-[300px] h-screen  *:p-2 *:rounded-[20px]">
                <SideBar />
            </div>
            <div className="w-full border">
                <div className="w-full h-[60px] *:p-2 *:rounded-[20px]">
                    <Header />
                </div>
                <div className="border w-full *:p-2 *:rounded-[20px] mt-1.5">
                    {children}
                </div>
            </div>
        </div>
    )
}