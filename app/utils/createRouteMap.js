"use client";

import('leaflet').then(obj => L)


export default function createRouteMap({ route, color, mapRef }) {
  const polyline = L.polyline(route, { color: color });
  polyline.addTo(mapRef.current);
}