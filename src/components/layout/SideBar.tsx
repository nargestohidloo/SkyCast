
"use client";

import Image from "next/image";
import {
    House,
    Map,
    MapPin,
    ChartNoAxesCombined,
    Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
    const MyData = [
        { id: 1, name: "Home", icon: House, href: "/" },
        { id: 2, name: "Maps", icon: Map, href: "/maps" },
        { id: 3, name: "Cities", icon: MapPin, href: "/cities" },
        { id: 4, name: "Reports", icon: ChartNoAxesCombined, href: "/reports" },
        { id: 5, name: "Settings", icon: Settings, href: "/settings" },
    ];

    const pathname = usePathname();

    return (
        <div className="relative flex h-full w-full flex-col bg-white lg:min-h-full">

            {/* Logo */}
            <div className="hidden items-center justify-center lg:flex">
                <Image
                    src="/images/sky.jpg"
                    alt="SkyCast weather logo"
                    width={60}
                    height={60}
                />

                <div className="p-2">
                    <span className="text-[18px] font-bold text-blue-900">
                        SkyCast
                    </span>
                    <p className="text-[12px] text-blue-950">
                        Weather for a better day
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex h-full w-full items-center justify-around gap-1 lg:mt-5 lg:h-auto lg:flex-col lg:items-stretch lg:justify-start lg:gap-2">

                {MyData.map((val) => {
                    const Icon = val.icon;
                    const isActive = pathname === val.href;

                    return (
                        <Link
                            key={val.id}
                            href={val.href}
                            aria-label={val.name}
                            className={`flex h-12 flex-1 flex-col items-center justify-center gap-1 rounded-xl transition-colors lg:h-12 lg:flex-row lg:flex-none lg:justify-start lg:gap-3 lg:p-4 ${
                                isActive
                                    ? "bg-blue-100 text-blue-900"
                                    : "bg-white text-gray-600 hover:bg-blue-100/30"
                            }`}
                        >
                            <Icon size={20} />

                            <span className="text-[10px] sm:text-[11px] lg:text-[14px]">
                                {val.name}
                            </span>
                        </Link>
                    );
                })}

            </nav>

            {/* Mountain Image */}
            <div className="absolute bottom-20 left-0 hidden h-[200px] w-full overflow-hidden lg:block">
                <Image
                    src="/images/mountain.jpg"
                    alt="mountain"
                    fill
                    className="object-cover object-center"
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}
                    sizes="250px"
                />
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-10 left-0 hidden flex-col text-blue-950 lg:flex lg:pl-5 lg:text-[12px]">
                <span>Better days</span>
                <span>start with</span>
                <span>better weather</span>
            </div>

        </div>
    );
}
