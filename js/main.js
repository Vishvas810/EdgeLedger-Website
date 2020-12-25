// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 23.039730, lng: 72.562750 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background with required opacity
window.addEventListener('scroll', function() { //window is a size of whole browser
  if (window.scrollY > 150) { //if y position of windows is greater than 150
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {  //for all the links in navbar and readmore button
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100  //Negative 100 helps in seeing the title
      },
      800 //Scrolling Speed in ms
    );
  }
});