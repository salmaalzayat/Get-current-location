
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById("latitude").textContent = "Latitude: " + latitude;
            document.getElementById("longitude").textContent = "Longitude: " + longitude;
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}
  document.getElementById("getLocation").addEventListener("click", getLocation);