"use client"
import { useState } from "react";
import CitiesBanner from "./CitiesBanner";
import CityCard from "./CityCard";
import CitiyList from "./CityList";
import RecentlyCities from "./RecentlyCities";
import SearchCities from "./SearchCities";
import WeatherTip from "./WeatherTip";
import AddCityModal from "./AddCityModal";

export default function CitiesPage() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="relative w-full *:text-black flex min-w-0 space-y-4 max-lg:flex-col max-lg:gap-4 max-lg:space-y-0">

                <div className="h-full w-full m-2 flex flex-col gap-2 max-lg:m-0 max-lg:w-full">

                    <div className="w-full h-[100px]">
                        <CitiesBanner
                            onAddCity={setIsOpen}
                        />
                    </div>
                    <div className="border w-[600px] h-[600px] fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
                        {isOpen && <AddCityModal />}
                    </div>

                    <div>
                        <CityCard />
                    </div>

                    <div>
                        <CitiyList />
                    </div>

                </div>

                <div className="w-[700px] h-full flex flex-col gap-2 lg:gap-5 max-lg:w-full ">

                    <div className="w-full h-70 max-lg:h-auto">
                        <SearchCities />
                    </div>

                    <div className="h-65 max-lg:h-auto">
                        <RecentlyCities />
                    </div>

                </div>

            </div>

            <div className="h-28 max-lg:w-full mt-2 lg:mt-0">
                <WeatherTip />
            </div>
        </>
    );
}
