import MainLayout from "@/components/layout/MainLayout";
import ToolBar from "@/components/layout/ToolBar";
import { MapPin } from "lucide-react";

export default function page() {
    return (
        <div>
            <MainLayout>
                <ToolBar
                    title="Cities"
                    des="Manage and explore your favorite cities"
                    icon={MapPin}
                />
                <div className="w-full h-[800px] *:text-black flex min-w-0 space-y-4 border border-black">
                    <div className="border h-full w-full">
                        <div className="w-full h-[300px] border">c</div>
                        <div className="">c</div>
                    </div>
                    <div className="w-[700px]  h-full border border-black">gggg</div>
                </div>
            </MainLayout>

        </div>
    )
}