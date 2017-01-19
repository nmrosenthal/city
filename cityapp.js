    var long = 0;
    var lat = 39.02;
    var mymap;
    var heatmap;

    function initMap() {
        var uluru = {lat: 39.1609, lng: -77.2206};
        mymap = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: uluru
        });
	}

	function displayData(firstD,secondD, firstT,secondT) {
		console.log("https://data.montgomerycountymd.gov/resource/ms8i-8ux3.json?color=RED&$where=description like '%25EXCEED%25' AND latitude > 39.02 AND longitude < 0 AND date_of_stop between '"+firstD+"T00:00:00' and '"+ secondD + "T00:00:00' AND time_of_stop between '" + firstT + "' and '" + secondT +"'");
		  	$.ajax({
		    url: "https://data.montgomerycountymd.gov/resource/ms8i-8ux3.json?color=RED&$where=description like '%25EXCEED%25' AND latitude > 39.02 AND longitude < 0 AND date_of_stop between '"+firstD+"T00:00:00' and '"+ secondD + "T00:00:00'", 
		    type: "GET",
		    data: {
		      "$limit" : 10000,
		      "$$app_token" : "EomQIfjQBBVCOkhua3dU0818w"
    		}
		}).done(function(data){
			var ll = [];
			$("#notification").text("Retrieved " + data.length + " Records From The Data Set!");
			for (i in data) {
				// console.log(data[i].description);
				// console.log(data[i].date_of_stop);
				console.log(data);
			 //  	console.log(data[i].color + " " + data[i].race + " " + data[i].latitude + " " + data[i].longitude);
			  	var latLng = new google.maps.LatLng(data[i].latitude, data[i].longitude);
			  	ll.push(latLng);        		
	  		}
	  	 	heatmap = new google.maps.visualization.HeatmapLayer({
          		data: ll,
          		map: mymap
        	});
      	});
	}

	function toggleHeatmap() {
        	mymap.setMap(heatmap.getMap() ? null : heatmap);
      		};


    $("#submitForm").click(function() {
    	var firstDate = ($("#firstDate").val());
    	var secondDate = ($("#secondDate").val());
    	console.log(firstDate);
    	var firstTime = ($("#firstTime").val()+":00");
    	var secondTime= ($("#secondTime").val()+":00");
    	displayData(firstDate,secondDate,firstTime,secondTime);
    });
