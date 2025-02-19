import useMapContext from "@/app/hooks/useMapContext";
import usePathFinder from "@/app/hooks/usePathFinder";
import useRegionContext from "@/app/hooks/useRegionContext";
import CheckboxInput from "@/app/ui/CheckboxInput";
import createMarkerMap from "@/app/utils/createMarkerMap";
import createRouteMap from "@/app/utils/createRouteMap";
import deleteAllLines from "@/app/utils/deleteAllLines";
import deleteAllMarkers from "@/app/utils/deleteAllMarkers";
import { useEffect, useState } from "react";

export default function PublicTransportSection() {
  const { publicTransport, changeShowPublicTransport, showPublicStops, hiddenPublicTransport } = useRegionContext();
  const { mapRef } = useMapContext()
  const { activePathFinder, setActiveActivePathFinder, userLocation, clickLocation, closetRoute } = usePathFinder()

  const [hiddenStops, setHiddenStops] = useState(false)
  useEffect(() => {
    if (!publicTransport || !mapRef) return
    deleteAllLines({ mapRef })
    deleteAllMarkers({ mapRef })

    if (userLocation && clickLocation && closetRoute) {
      createMarkerMap({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        iconType: "user",
        mapRef
      })
      createMarkerMap({
        latitude: clickLocation.latitude,
        longitude: clickLocation.longitude,
        iconType: "destination",
        mapRef
      })
      createRouteMap({
        route: [[userLocation.latitude, userLocation.longitude], [closetRoute.stops.nearestStopUser.latitude, closetRoute.stops.nearestStopUser.longitude]],
        color: "black",
        mapRef
      })
      createRouteMap({
        route: [[clickLocation.latitude, clickLocation.longitude], [closetRoute.stops.nearestStopDestination.latitude, closetRoute.stops.nearestStopDestination.longitude]],
        color: "black",
        mapRef
      })
    }

    publicTransport.routes.forEach((route) => {
      if (route.show) {
        const coords = route.route.map((coord) => [coord.latitude, coord.longitude])
        coords.push(coords[0])
        createRouteMap({ route: coords, color: route.color, mapRef })
      }
    })
    if (showPublicStops.length === 0) return
    if (hiddenStops) return
    showPublicStops.forEach((stop) => {
      if (stop.show) {
        createMarkerMap({
          latitude: stop.latitude,
          longitude: stop.longitude,
          message: "<p><b>" + stop.name + "</b></p><p>" + stop.routesNames.join(", ") + "</p>",
          mapRef
        })
      }
    })
  }, [publicTransport, hiddenStops])

  useEffect(() => {
    if (userLocation && clickLocation && closetRoute) {
      hiddenPublicTransport()
      deleteAllLines({ mapRef })
      deleteAllMarkers({ mapRef })
      changeShowPublicTransport({ id: closetRoute.routeId })
    }
  }, [userLocation, clickLocation, closetRoute])

  return (
    <>
    {publicTransport ? (
      <section className="flex flex-col h-full px-2">
        <h3 className="text-center">{publicTransport.name}</h3>
        <div className="flex flex-col justify-between h-full my-2">
          <div className="flex flex-col justify-start gap-1">
          {
            publicTransport.routes.map((route) => {
              return (
                <CheckboxInput
                  key={route.id}
                  id={route.id}
                  name={route.name}
                  checked={route.show}
                  onChange={() => changeShowPublicTransport({ id: route.id })}
                >
                  {route.name}
                </CheckboxInput>
              )
            })
          }
          </div>
          <div className="flex flex-col gap-1">
            <CheckboxInput
              id="hidden-stops"
              name="hidden-stops"
              checked={hiddenStops}
              onChange={() => setHiddenStops(!hiddenStops)}
            >
              {hiddenStops ? "Mostrar paradas" : "Ocultar paradas"}
            </CheckboxInput>
            <CheckboxInput
              id="path-finder"
              name="path-finder"
              checked={activePathFinder}
              onChange={() => setActiveActivePathFinder(!activePathFinder)}
            >
              Buscar recorrido
            </CheckboxInput>
          </div>
        </div>
      </section>
    ) : (
      <p>Loading</p>
    )}
    </>
  )
}