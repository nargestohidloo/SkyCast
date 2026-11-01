import MainLayout from "@/components/layout/MainLayout";
import ReportsPage from "@/components/reports/ReportsPage";

export default function page(){
    return(
        <div>
            <MainLayout>
                <ReportsPage/>
            </MainLayout>
        </div>
    )
}