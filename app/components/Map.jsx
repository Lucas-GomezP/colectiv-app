"use client"

import { useEffect } from "react"
import L from "leaflet"
import useRegionContext from "../hooks/useRegionContext"
import useMapContext from "../hooks/useMapContext"
import 'leaflet/dist/leaflet.css';

import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
export default function MapView() {
  const { mapRef } = useMapContext()
  const { region } = useRegionContext()

  useEffect(() => {
    if (region && typeof window !== 'undefined') {
      if (!mapRef.current) { 
        mapRef.current = L.map("map", {
          center: [region.latitude, region.longitude],
          zoom: 13,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current);
      } else { 
        mapRef.current.setView([region.latitude, region.longitude], 13);
      }
    }
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null; 
      }
    };
  }, [region])
  return (
    <div className="w-full h-full">
      <div id="map"></div>
    </div>
  )
}