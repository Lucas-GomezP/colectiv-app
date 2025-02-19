export default async function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        resolve({latitude: coords.latitude, longitude: coords.longitude});
      },
      (err) => {
        alert("No se pudo obtener la ubicacion del usuario")
        console.error(err)
        reject(err);
      }
    )
  })
}