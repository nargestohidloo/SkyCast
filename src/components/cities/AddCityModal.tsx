"use client"
import { MapPin, Search } from "lucide-react";
import { CitiesBannerProps } from "./types";
import { useEffect, useState } from "react";
import { searchCities } from "@/services/weather";
import { City } from "@/types/types";
import { getWeather } from "@/services/weather";

export default function AddCityModal({ onAddCity }: CitiesBannerProps) {
    const [isData, setData] = useState("")
    const [cities, setCities] = useState<City[]>([]);
    const [color, setColor] = useState<City | null>(null)
    const [myData, setMyData] = useState([])
    console.log(cities);

    useEffect(() => {
        if (isData.length >= 3) {
            searchCities(isData).then((data) => {
                setCities(data)
            })

        }
        //  کار نکرد 
        // چون طبق تعریف بالا تو تایپ اسکریپت انتظار داره ورودی بگیره
        // if (isData.length < 3) {
        //     searchCities([])
        // }
    }, [isData])

    useEffect(() => {
        if (!color) return;


        getWeather(color.latitude, color.longitude).then((data) => {
            setMyData(data);
        });
    }, [color])

    return (

        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl flex flex-col gap-6">

            <div className="flex items-center gap-4 rounded-xl bg-blue-50 p-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100">
                    <MapPin className="size-6 text-blue-600" />
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Add a New City
                    </h2>
                    <p className="text-sm text-gray-500">
                        Find and add your favorite city
                    </p>
                </div>
            </div>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
                <Search className="size-5 text-gray-400" />

                <input
                    type="text"
                    name="city"
                    id="city"
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    placeholder="Search city name..."
                    value={isData}
                    onChange={(e) => {
                        setData(e.target.value);
                        if (e.target.value.length < 3) {
                            setCities([]);
                        }
                    }}
                />
            </div>
            <div className="w-full max-h-64 overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-lg shadow-blue-900/5">
                {cities.map((val) => {
                    return (
                        <div
                            onClick={(() => {
                                setColor(val)
                            })}
                            className={`flex items-center gap-3 border-b border-gray-100 px-4 py-3 transition-colors hover:bg-blue-50 cursor-pointer last:border-b-0 ${color === val && "bg-blue-50"}`}
                            key={val.id}
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <MapPin size={18} />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-800">
                                    {val.name}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {val.country}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-end gap-3">
                <button className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                    onClick={() => onAddCity(false)}>
                    Cancel
                </button>

                <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
                    Add City
                </button>
            </div>

        </div>
    );
}
