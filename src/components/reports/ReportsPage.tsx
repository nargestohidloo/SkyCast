import ToolBar from "../layout/ToolBar";
import { ChartNoAxesCombined  } from "lucide-react";
export default function ReportsPage() {
    return (
        <div className="w-full">
            <div className="w-full ">
                <div className="w-full ">
                    <ToolBar title="Weather Reports" des="Detailed weather insights and useful analytics " loc="Tehran , Iran" icon={ChartNoAxesCombined} />
                </div>
            </div>
            <div></div>
        </div>
    )
}