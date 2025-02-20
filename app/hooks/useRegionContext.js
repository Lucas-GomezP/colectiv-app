"use client";

import { useContext } from "react";
import { RegionContext } from "../context/RegionContext";

export default function useRegionContext() {
  const {
    region,
    setRegion,
    publicTransport,
    setPublicTransport,
    changeShowPublicTransport,
    showPublicStops,
    hiddenPublicTransport
  } = useContext(RegionContext)
  return {
    region,
    setRegion,
    publicTransport,
    setPublicTransport,
    changeShowPublicTransport,
    showPublicStops,
    hiddenPublicTransport
  };
}