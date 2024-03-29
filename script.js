// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 28.613939, lng: 77.209023 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('#contact-map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }
  