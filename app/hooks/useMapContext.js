"use client";

import { useContext } from "react";
import { MapContext } from "../context/MapContext";

export default function useMapContext() {
  const { mapRef, clickMapAction } = useContext(MapContext)
  return { mapRef, clickMapAction };
}