import CutuesHeader from "./CitiesBanner";
import CityCard from "./CityCard";
import CitiyList from "./CityList";

export default function CitiesPage() {
    return (
        <>
            <div className="w-full h-[800px] *:text-black flex min-w-0 space-y-4 ">
                <div className=" h-full w-full m-2 ">
                    <div className="w-full h-[100px] ">
                        <CutuesHeader />
                    </div>
                    <div className="h-[240px] m-2">
                        <CityCard />
                    </div>
                    <div className="h-[420px] m-2 ">
                        <CitiyList />
                    </div>
                </div>
                <div className="w-[700px] h-full border border-black">gggg</div>
            </div>
        </>
    )
}