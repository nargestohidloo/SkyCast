import { MapPin } from "lucide-react";

export default function SearchCities(){
    return(
        <div className=" flex flex-col gap-10">
            <div className="flex items-center gap-2">
                <span><MapPin/></span>
                <div className="flex flex-col">
                    <span>Quik Add</span>
                    <p>Type a city add ...</p>
                </div>
            </div>
            <div className=" border h-10 rounded-[10px]">
                <input className="border-none outline-none" type="text" />
            </div>
            <div>
                <span></span>
                <div>
                    {/* data */}
                </div>
            </div>
        </div>
    )
}
