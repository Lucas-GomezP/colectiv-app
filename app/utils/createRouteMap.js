import L from "leaflet";

export default function createRouteMap({ route, color, mapRef }) {
  const polyline = L.polyline(route, { color: color });
  polyline.addTo(mapRef.current);
}