"use client"

import { useEffect } from "react"
import L from "leaflet"
import useRegionContext from "../hooks/useRegionContext"
import useMapContext from "../hooks/useMapContext"
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
})

export default function MapView() {
  const { mapRef } = useMapContext()
  const { region } = useRegionContext()

  useEffect(() => {
    if (!region) return
    mapRef.current = L.map("map", {center: [region.latitude, region.longitude], zoom: 13})
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
      }
    }
  }, [region])
  return (
    <div className="w-full h-full">
      <div id="map"></div>
    </div>
  )
}