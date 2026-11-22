import CutuesHeader from "./CitiesBanner";
import CityCard from "./CityCard";
import CitiyList from "./CityList";
import SearchCities from "./SearchCities";

export default function CitiesPage() {
    return (
        <>
            <div className="w-full *:text-black flex min-w-0 space-y-4  ">
                <div className=" h-full w-full m-2 flex flex-col gap-2">
                    <div className="w-full h-[100px]  ">
                        <CutuesHeader />
                    </div>
                    <div >
                        <CityCard />
                    </div>
                    <div >
                        <CitiyList />
                    </div>
                </div>
                <div className="w-[700px] h-full border border-black">
                    <div className="h-70 border">
                        <SearchCities />
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}