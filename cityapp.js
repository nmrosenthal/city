     function initMap() {
        var uluru = {lat: 34.04, lng: 18.24};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

	$.getJSON("https://data.montgomerycountymd.gov/resource/ms8i-8ux3.json", function(data) {
		console.log(typeof(data));
		data.map(function(citation) {
			(citation.latitude);
		})
  		// $.each(console.log(data.latitude + " " + data.longitude));
  });

	//jordan
	//a function that will parse the object returned from noam's url data fetch and build an array of objects containing lat longs



	//shallin
	//a function that will parse an array of lat longs and pass those through to the google map



// $(window).on('load',function() {
//     url = 'http://data.ct.gov/resource/9k2y-kqxn.json?organization_type=Public%20School%20Districts&$$app_token=CGxaHQoQlgQSev4zyUh5aR5J3';
//     // Intialize our map
//     var center = new google.maps.LatLng(41.7656874,-72.680087);
//     var mapOptions = {
//       zoom: 8,
//       center: center
//     }
//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
//     // Retrieve our data and plot it
//     $.getJSON(url, function(data, textstatus) {
//           console.log(data);
//           $.each(data, function(i, entry) {
//               var marker = new google.maps.Marker({
//                   position: new google.maps.LatLng(entry.location_1.latitude, 
//                                                    entry.location_1.longitude),
//                   map: map,
//                   title: location.name
//               });
//           });
//     });
// });

