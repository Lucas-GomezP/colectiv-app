"use client";

import { createContext, useEffect, useState } from "react";
import DATA from "../lib/data.json";

export const RegionContext = createContext();

const ACTUAL_REGION_ID = 1;

export default function RegionContextProvider({ children }) {
  const [region, setRegion] = useState()
  const [publicTransport, setPublicTransport] = useState()
  const [showPublicStops, setShowPublicStops] = useState([])

  useEffect(() => {
    const newRegion = DATA.find((region) => region.regionId === ACTUAL_REGION_ID)
    if (!newRegion) return
    const { regionId, latitude, longitude, regionName } = newRegion
    setRegion({regionId, latitude, longitude, regionName})
    
    const newPublicTransport = newRegion.data.publicTransport
    const updateRoutes = newPublicTransport.routes.map((route) => {
      return {
        ...route,
        show: false
      }
    })
    const publicTransportWithShow = {
      ...newPublicTransport,
      routes: updateRoutes
    }
    setPublicTransport(publicTransportWithShow)
  }, [ACTUAL_REGION_ID])

  const changeShowPublicTransport = ({ id }) => {
    if (!publicTransport) return
    const updatedRoutes = publicTransport.routes.map((route) => {
      if (route.id === id) {
        return {
          ...route,
          show: !route.show
        }
      } 
      return route
    })
    const publicTransportWithShow = {
      ...publicTransport,
      routes: updatedRoutes
    }
    setPublicTransport(publicTransportWithShow)

    const actualShowingRoutes = updatedRoutes
      .filter((route) => route.show)
      .map((route) => route.id)
    const newShowingStops = publicTransportWithShow.stops.map((stop) => {
      if (
        stop.routes.some((routeId) => actualShowingRoutes.includes(routeId))
      ) {
        return {
          ...stop,
          show: true
        }
      } else {
        return {
          ...stop,
          show: false
        }
      }
    })
    setShowPublicStops(newShowingStops)
  }

  const hiddenPublicTransport = () => {
    const updatedRoutes = publicTransport.routes.map((route) => ({
      ...route,
      show: false,
    }));
    const publicTransportWithShow = {
      ...publicTransport,
      routes: updatedRoutes,
    };
    setPublicTransport(publicTransportWithShow);
    setShowPublicStops([]);
  }
  return <RegionContext.Provider value={{
    region,
    setRegion,
    publicTransport,
    setPublicTransport,
    changeShowPublicTransport,
    showPublicStops,
    hiddenPublicTransport,
  }}>{children}</RegionContext.Provider>;
}