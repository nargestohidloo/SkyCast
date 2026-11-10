import MainLayout from "@/components/layout/MainLayout";
import ToolBar from "@/components/layout/ToolBar";
import { Map } from "lucide-react";

export default function Maps() {
    return (
        <MainLayout>
            <ToolBar
                title="Maps"
                des="Explore weather conditions on the map"
                icon={Map}
            />

        </MainLayout>
    );
}