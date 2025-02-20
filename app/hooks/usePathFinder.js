"use client"

import { useEffect, useState } from "react";
import getUserLocation from "../utils/getUserLocation";
import useMapContext from "./useMapContext";
import useRegionContext from "./useRegionContext";
import calculateOptimalRoute from "../utils/calculateOptimalRoute";

export default function usePathFinder() {
  const {clickMapAction} = useMapContext()
  const {publicTransport} = useRegionContext();

  const [activePathFinder, setActiveActivePathFinder] = useState(false)
  const [userLocation, setUserLocation] = useState(null)
  const [clickLocation, setClickLocation] = useState(null)
  const [closetRoute, setClosetRoute] = useState(null)
  useEffect(() => {
    if (activePathFinder) {
      getUserLocation().then((location) => {
        setUserLocation(location)
      })
      clickMapAction({action: ({lat,lng}) => setClickLocation({latitude: lat, longitude: lng}), active: true})
    } else {
      setUserLocation(null)
      setClickLocation(null)
      clickMapAction({active: false})
      setClosetRoute(null)
    }
  }, [activePathFinder])

  useEffect(() => {
    if (userLocation && clickLocation) {
      const {nearestStopsRoutesOrdered} = calculateOptimalRoute({userLocation, clickLocation, publicTransport})
      setClosetRoute(nearestStopsRoutesOrdered[0])
    }
  }, [userLocation, clickLocation])

  return {activePathFinder, setActiveActivePathFinder, userLocation, clickLocation, closetRoute}
}