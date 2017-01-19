	var mymap;
	var heatmap;

	function initMap() {
	    var montg = {lat: 39.1609, lng: -77.2206};
	    mymap = new google.maps.Map(document.getElementById('map'), {
	        zoom: 9,
	        center: montg
	    });
	}

	function displayData(firstD,secondD) {
		  	$.ajax({
		    url: "https://data.montgomerycountymd.gov/resource/ms8i-8ux3.json?$where=description like '%25EXCEED%25' AND date_of_stop between '"+firstD+"T00:00:00' and '"+ secondD + "T00:00:00'",
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


    $("#submitForm").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var firstDate = ($("#firstDate").val());
    	var secondDate = ($("#secondDate").val());
    	var firstTime = ($("#firstTime").val()+":00");
    	var secondTime= ($("#secondTime").val()+":00");
    	displayData(firstDate,secondDate);
    });


    // $( document ).ready(function() {
    //     console.log( "ready!" );
    //     var options_array = ["low", "medium", "high"];
    //
    //     for (var i = 0; i < options_array.length; i++) {
    //         var options = $("<p/>");
    //         options.text(options_array[i]);
    //         options.css("color", "white");
    //         console.log(options_array[i]);
    //         if (options_array[i] === "high") {
    //             options.css("color", "red");
    //         }
    //     }
    //     $("#risk-report").append(options);
    // });