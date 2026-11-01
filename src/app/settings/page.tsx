import MainLayout from "@/components/layout/MainLayout";
import SettingPage from "@/components/settings/SettingPage";

export default function page(){
    return(
        <div>
            <MainLayout>
                <SettingPage/>
            </MainLayout>
        </div>
    )
}