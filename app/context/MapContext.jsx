"use client";

import { createContext, useRef } from "react";

export const MapContext = createContext();

export default function MapContextProvider({ children }) {
  const mapRef = useRef(null)

  const clickMapAction = ({action, active=false}) => {
    if (active) {
      mapRef.current?.on("click", (event) => {
        const { lat, lng } = event.latlng;
        action({ lat, lng });
      })
    } else {
      mapRef.current?.off("click")
    }
  }
  return <MapContext.Provider value={{
    mapRef,
    clickMapAction
  }}>{children}</MapContext.Provider>;
}