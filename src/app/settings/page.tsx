import MainLayout from "@/components/layout/MainLayout";
import ToolBar from "@/components/layout/ToolBar";
import { Settings } from "lucide-react";

export default function page() {
    return (
        <div>
            <MainLayout>
                <ToolBar
                    title="Settings"
                    des="Mange your account and app prefrences "
                    icon={Settings} />
            </MainLayout>
        </div>
    )
}