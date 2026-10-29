"use client"
import Image from "next/image"
import {
    House,
    Map,
    MapPin,
    ChartNoAxesCombined,
    Settings,
} from "lucide-react";

import { useState } from "react";
export default function SideBar() {
    const MyData = [
        { id: 1, name: "Home", icon: House },
        { id: 2, name: "Maps", icon: Map },
        { id: 3, name: "Cities", icon: MapPin },
        { id: 4, name: "Reports", icon: ChartNoAxesCombined },
        { id: 5, name: "Settings", icon: Settings },
    ]

    const [isOpen, setIsOpen] = useState(1)


    return (
        <div className="bg-white min-h-full w-full relative ">
            <div className=" flex justify-center items-center">
                <div>
                    <Image
                        src={"/images/sky.jpg"}
                        alt="SkyCast weather logo"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="p-2">
                    <span className="text-[18px] text-blue-900 font-bold">SkyCast</span>
                    <p className="text-[12px]">Weather for a better day</p>
                </div>
            </div>


            <div className=" w-full h-12 mt-5 ">
                {MyData.map((val) => {
                    const Icon = val.icon
                    return (
                        <div key={val.id}
                            onClick={() => setIsOpen(val.id)}
                            className={`rounded-[10px] w-full h-full flex items-center p-4 *:p-2 mt-2 ${isOpen === val.id ? "bg-blue-100 text-blue-900" : "bg-white text-gray-600 hover:bg-blue-100/30"} `}>
                            <span><Icon size={20} /></span>
                            <span className="text-[14px]">{val.name}</span>
                        </div>
                    )
                })}
            </div>



            <div className="absolute bottom-20 left-0 w-full h-[200px] overflow-hidden ">
                <Image
                    src="/images/mountain.jpg"
                    alt="mountain"
                    fill
                    className="object-cover  object-center"
                    // style = ویژگی دستی css 
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}
                    sizes="250px"
                />
            </div>
            <div className="absolute bottom-10 left-0 flex flex-col *:text-[12px] text-blue-950 *:pl-5">
                <span>Better days</span>
                <span>start with</span>
                <span>better weather</span>
            </div>
        </div>
    )

}
