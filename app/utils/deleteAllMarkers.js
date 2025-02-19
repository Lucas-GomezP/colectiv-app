export default function deleteAllMarkers({mapRef}) {
  mapRef.current?.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      mapRef.current.removeLayer(layer);
    }
  })
}