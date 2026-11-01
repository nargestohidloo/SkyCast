"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

export default function WeatherMap() {
    const mapContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let map: LeafletMap | undefined;
        let cancelled = false;

        async function initializeMap() {
            const L = await import("leaflet");

            if (cancelled || !mapContainer.current) return;

            map = L.map(mapContainer.current, {
                center: [35.6892, 51.389],
                zoom: 5,
                zoomControl: false,
            });

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 19,
                }
            ).addTo(map);
        }

        initializeMap();

        return () => {
            cancelled = true;
            map?.remove();
        };
    }, []);

    return (
        <div
            ref={mapContainer}
            className="h-[500px] w-full overflow-hidden rounded-2xl"
        />
    );
}
