import ToolBar from "../layout/ToolBar";
import { Settings } from "lucide-react";
export default function SettingPage() {
    return (
        <div>
            <div>
                <ToolBar title="Settings" des="Mange your account and app prefrences " icon={Settings} />

            </div>
            <div></div>
        </div>
    )
}