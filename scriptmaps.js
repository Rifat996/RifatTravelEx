
function createTourMap(mapDivId, start, end){


// Defining tourist destinations along the way
const destinations = [
  { name: "Sunnyland", coordinates: [43.8410, 18.4140], image: "imgs/sunnyland-sarajevo.jpg", category: "restaurant" },
  { name: "Restaurant Semesnica", coordinates: [44.1388, 17.3600], image: "imgs/restaurant-semesnica.jpg", category: "restaurant" },
  { name: "Travnik Plava voda", coordinates: [44.2293, 17.6724], image: "imgs/plava-voda.jpg", category: "restaurant" },
  { name: "Pliva Lakes", coordinates: [44.3464, 17.2207], image: "imgs/plivsko-jezero.jpg", category: "landmark" },
  { name: "Jajce Waterfall", coordinates: [44.3438, 17.2625], image: "imgs/jajce-waterfall.jpg", category: "landmark" },
  { name: "Una National Park", coordinates: [44.6852, 16.1228], image: "imgs/una-rafting.jpg", category: "landmark" },
  { name: "Sarajevo Old Town", coordinates: [43.85971876026368, 18.431191997153984], image: "imgs/old-town.jpg", category: "landmark" },
  { name: "Blagaj Tekke", coordinates: [43.2538, 17.8919], image: "imgs/blagaj.jpg", category: "landmark" },
  { name: "Kravice Waterfall", coordinates: [43.1562, 17.6097], image: "imgs/kravice.jpg", category: "landmark" },
  { name: "Mostar", coordinates: [43.3378, 17.8078], image: "imgs/mostar-bridge.jpg", category: "landmark" },
  { name: "Bihac", coordinates: [44.8186, 15.8708], image: "imgs/bihac-city.jpg", category: "landmark" },
  { name: "Konjic", coordinates: [43.6570, 17.9593], image: "imgs/konjic-bridge.jpg", category: "landmark" },
  { name: "Neum", coordinates: [42.9236, 17.6141], image: "imgs/neum.jpg", category: "landmark" }
];


// Making a request to OpenRouteService Directions API
const apiKey = '5b3ce3597851110001cf624899b2fc1bb3f646038d23eb2990cd8f84'; // API key
const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start[1]},${start[0]}&end=${end[1]},${end[0]}`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extracting the route geometry from the response
    const geometry = data.features[0].geometry;

    // Adding the route to a Leaflet map
    const map = L.map(mapDivId).setView(start, 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);
    L.geoJSON(geometry).addTo(map);

    
    const markers = L.featureGroup().addTo(map);
      let currentCategory = 'all';

      function filterMarkers(category) {
        
        currentCategory = category;
        markers.clearLayers();
        destinations.forEach(dest => {
          if (category === 'all' || dest.category === category) {
            const marker = L.marker(dest.coordinates, { 
              icon: L.icon({ 
                iconUrl: 'imgs/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                popupAnchor: [0, -30]
              }) 
            });
            
            marker.bindPopup(`<h5>${dest.name}</h5><img src="${dest.image}" alt="${dest.name}" width="200" height="150">`);
            markers.addLayer(marker);
          }
        });
      }

      // Adding a filter control to the map
      const filterControl = L.control({ position: 'topright' });
      filterControl.onAdd = function() {
        const filterDiv = L.DomUtil.create('div', 'filter-control');
        const select = L.DomUtil.create('select', 'form-control', filterDiv);
        const allOption = L.DomUtil.create('option', '', select);
        allOption.textContent = 'All';
        allOption.value = 'all';
        const landmarkOption = L.DomUtil.create('option', '', select);
        landmarkOption.textContent = 'Landmarks';
        landmarkOption.value = 'landmark';
        const restaurantOption = L.DomUtil.create('option', '', select);
        restaurantOption.textContent = 'Restaurants';
        restaurantOption.value = 'restaurant';

        select.addEventListener('change', function() {
          filterMarkers(this.value);
        });

        return filterDiv;
      }
      filterControl.addTo(map);

      filterMarkers(currentCategory);
    })
  .catch(error => console.log(error));
}
const startMostar = [43.470172656719164, 18.751208639326794]; // coordinates [latitude, longitude]
const endSarajevo = [43.8563, 18.4131]; 
const endBihac = [44.8151, 15.8708]; 
const endJajce = [44.3438, 17.2625];

offerButton1 = document.querySelector("#btn1");
offerButton1.addEventListener("click", function() {
  setTimeout(function() {
    createTourMap("map", startMostar, endBihac);
  }, 10);
});

offerButton2 = document.querySelector("#btn2");
offerButton2.addEventListener("click", function() {
  setTimeout(function() {
    createTourMap("map2", endSarajevo, endBihac);
  }, 10);
});

offerButton3 = document.querySelector("#btn3");
offerButton3.addEventListener("click", function() {
  setTimeout(function() {
    createTourMap("map3", endSarajevo, endJajce);
  }, 10);
});

nextBtn1 = document.querySelector("#nextbtn1");
nextBtn1.addEventListener("click", function() {
  setTimeout(function() {
    createTourMap("map2", endSarajevo, endBihac);
  }, 10);
});

nextBtn2 = document.querySelector("#nextbtn2");
nextBtn2.addEventListener("click", function() {
  setTimeout(function() {
    createTourMap("map3", endSarajevo, endJajce);
  }, 10);
});



//----Social media functionality----//
var facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
document.querySelector('.fb-image').setAttribute('href', facebookShareUrl);

var instagramShareUrl = 'https://www.instagram.com/share?url=' + encodeURIComponent(window.location.href);
document.querySelector('.inst-image').setAttribute('href', instagramShareUrl);

var whatsappShareUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(window.location.href);
document.querySelector('.whats-image').setAttribute('href', whatsappShareUrl);

var twitterShareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href);
document.querySelector('.twitter-image').setAttribute('href', twitterShareUrl);
