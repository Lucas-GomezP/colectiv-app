import { findNearest, getDistance } from "geolib"

export default function calculateOptimalRoute({userLocation, clickLocation, publicTransport}) {
  const routesWhitStops = publicTransport.routes.map((route) => {
    const stopsOfRoute = publicTransport.stops.filter((stop) => 
      stop.routes.includes(route.id)
    )
    return {
      ...route,
      stops: stopsOfRoute
    }
  })

  let nearestStopsRoutes = []

  routesWhitStops.forEach((route) => {
    const nearestStopDestination = findNearest(
      {
        latitude: clickLocation.latitude,
        longitude: clickLocation.longitude
      },
      route.stops.map((stop) => {
        return {
          latitude: stop.latitude,
          longitude: stop.longitude
        }
      })
    )
    const nearestStopUser = findNearest(
      {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude
      },
      route.stops.map((stop) => {
        return {
          latitude: stop.latitude,
          longitude: stop.longitude
        }
      })
    )
    
    const distanceNearestStopDestination = getDistance(
      clickLocation,
      nearestStopDestination,
    );

    const distanceNearestStopUser = getDistance(
      userLocation,
      nearestStopUser,
    );

    nearestStopsRoutes.push({
      routeId: route.id,
      routeName: route.name,
      distanceNearestStopDestination: distanceNearestStopDestination,
      distanceNearestStopUser: distanceNearestStopUser,
      totalDistance: distanceNearestStopDestination + distanceNearestStopUser,
      stops: {
        routeId: route.id,
        nearestStopDestination: publicTransport.stops.find(
          (stop) =>
            stop.latitude === nearestStopDestination.latitude &&
            stop.longitude === nearestStopDestination.longitude,
        ),
        nearestStopUser: publicTransport.stops.find(
          (stop) =>
            stop.latitude === nearestStopUser.latitude &&
            stop.longitude === nearestStopUser.longitude,
        ),
      },
    });
  })
  const nearestStopsRoutesOrdered = nearestStopsRoutes
  .sort((a, b) => {
    return a.totalDistance - b.totalDistance;
  }).slice(0, 1);

  return { nearestStopsRoutesOrdered };
}