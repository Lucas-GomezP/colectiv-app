import L from "leaflet";

export default function createMarkerMap({
  latitude,
  longitude,
  draggable=false,
  message='',
  dragStart=() => {},
  dragging=() => {},
  dragEnd=() => {},
  iconType='default',
  mapRef 
}) {
  const marker = L.marker([latitude, longitude], {draggable: draggable})
  message.length > 0 && marker.bindPopup(message).openPopup()
  if (draggable) {
    marker.on('dragstart', () => {
      const { lat, lng } = marker.getLatLng();
      dragStart({ lat, lng });
    });
    marker.on('drag', () => {
      const { lat, lng } = marker.getLatLng();
      dragging({ lat, lng });
    })
    marker.on('dragend', () => {
      const { lat, lng } = marker.getLatLng();
      dragEnd({ lat, lng });
    });
  }

  if (iconType === 'destination') {
    marker.setIcon(L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }));
  }
  if (iconType === 'user') {
    marker.setIcon(L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }))
  }
  if (iconType === 'destinationstop') {
    marker.setIcon(L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    }))
  }
  marker.addTo(mapRef.current);
}