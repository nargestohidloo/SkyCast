import MainLayout from "@/components/layout/MainLayout";
import ToolBar from "@/components/layout/ToolBar";
import { ChartNoAxesCombined } from "lucide-react";


export default function page() {
    return (
        <div>
            <MainLayout>
                <ToolBar
                    title="Weather Reports"
                    des="Detailed weather insights and useful analytics "
                    icon={ChartNoAxesCombined}
                />
            </MainLayout>
        </div>
    )
}