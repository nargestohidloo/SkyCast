import ToolBar from "../layout/ToolBar";
import { MapPin } from "lucide-react";
import WeatherMap from "./WeatherMap";

export default function MapsPage() {
    return (
        <div className="border w-full h-[650px]">
            <div >
                <ToolBar title="Weather Maps" des="Explore weather cnoditions around the world" loc="Tehran , Iran" showDate={true} icon={MapPin} />
            </div>
            <div className="w-full border  *:w-full  *:border h-[550px] mt-2.5">
                <div className="h-[500px] *:border flex ">
                    <div className="w-[900px] ">
                    <WeatherMap/>
                    </div>
                    <div className="w-"></div>
                </div>
                <div className="h-[50px]"></div>
            </div>
        </div>
    )
}