    
    var locations;   // set locations array as global variable, this will be used between 2 functions

    function initMap(){
        var map = new google.maps.Map(document.getElementById("map"), {   // center map
            zoom: 11,
            center: {
               lat: 53.465590,
              lng: -2.348213
               }
    });
         
    var labels =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   // array of labels for markers

    
    // array of locations
    
    locations = [

        ['<h1 class="info_Heading">Big Chief</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/big_chief.jpg" alt="big chief" style="margin-right: 10px;"><b>Contact: </b>07543 326141' +
        '<div><button type="button" id="chief" onclick="Choice(this);" class="btn btn-primary info-btn">Contact</button></div>', 53.465590, -2.348213, 1, "Big Chief"],


        ['<h1 class="info_Heading">Knights Town</h1>' +
            '<div id="bodyContent">' +
            '<img width="130"  height="100" align="left" src="assets/images/knights_town.jpg" alt="Knights Town" style="margin-right: 10px;"><b>Contact: </b>07465 342181' +
            '<div><button type="button" id="knight" onclick="Choice(this);" class="btn btn-primary info-btn">Contact</button></div>', 53.477314, -2.254962, 2, "Knights Town"],

       ['<h1 class="info_Heading">Lex Deux</h1>' +
        '<div id="bodyContent">' +
        '<img width="130" height="100" align="left" src="assets/images/les_deux.jpg" alt="Lex Deux" style="margin-right: 10px;"><b>Contact: </b>07265 241386' +
        '<div><button type="button" id="lexDeux" onclick="Choice(this);" class="btn btn-primary info-btn">Contact</button></div>', 53.446622, -2.308713, 3, "Lex Deux"]

    ];


    var infowindow = new google.maps.InfoWindow // declare info window

    var marker, i; // marker variable, i variable to loop through locations

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            label: labels[i % labels.length]
        });

        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) { // click event listener for infoWindow
            return function() {
                infowindow.setContent(locations[i][0]); // content from value '0' in array
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}


function Choice(elem) {

    var restName = ["Restaurant Name: "];

   if (elem.id == "chief") {

     document.getElementById("booking-title").textContent = restName[0] + locations[0][4];

   } else if (elem.id == "lexDeux") {
       
     document.getElementById("booking-title").textContent = restName[0] + locations[1][4];

   }else if (elem.id == "knight") {

     document.getElementById("booking-title").textContent = restName[0] + locations[2][4];

   };
 };

   
  