import CitiesPage from "@/components/cities/CitiesPage";
import MainLayout from "@/components/layout/MainLayout";
import ToolBar from "@/components/layout/ToolBar";
import { MapPin } from "lucide-react";

export default function page() {
    return (
        <div>
            <MainLayout>
                
                <CitiesPage/>
            </MainLayout>

        </div>
    )
}