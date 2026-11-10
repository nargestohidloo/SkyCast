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
            </MainLayout>
        </div>
    )
}