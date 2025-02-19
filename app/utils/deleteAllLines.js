export default function deleteAllLines({mapRef}) {
  mapRef.current?.eachLayer((layer) => {
    if (layer instanceof L.Polyline) {
      mapRef.current.removeLayer(layer);
    }
  })
}