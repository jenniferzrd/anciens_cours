mapsWidget = function mapsWidget() {
    var addMarker,
        clearMarkers,
        dom,
        geocoder,
        map,
        marker,
        markers,
        input,
        searchBox,
        service,
        updateForm;

    addMarker = function addMarker(pos) {
        var marker = new google.maps.Marker({position: pos, map: map});
        markers.push(marker);
    };

    clearMarkers = function clearMarkers() {
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];
    };

    updateForm = function updateForm(pos) {
        // log(pos);
        geocoder.geocode({
            'latLng': pos
        }, function(results, status) {
            var formInfos;
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    formInfos = results[0].address_components;
                    // log(formInfos);
                    dom.adress.value = formInfos[0].short_name + " " + formInfos[1].long_name;
                    dom.cp.value = (formInfos[6]) ? formInfos[6].short_name : '';
                    dom.ville.value = formInfos[2].long_name;
                    dom.lati.value = pos.lat();
                    dom.long.value = pos.lng();

                } else {
                    alert('No results found');
                }
            } else {
                alert('Geocoder failed due to: ' + status);
            }
        });
    };

    dom = {};
    dom.loader = byId("loader");
    dom.adress = byId("adresse");
    dom.cp = byId("cp");
    dom.ville = byId("ville");
    dom.lati = byId("lati");
    dom.long = byId("long");

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        clickableIcons: false,
        center: {
            lat: dom.lati.value ? Number(dom.lati.value) : 48.856579,
            lng: dom.long.value ? Number(dom.long.value) : 2.347555
        }
    });

    input = document.getElementById('search_map');
    searchBox = new google.maps.places.SearchBox(input);
    markers = [];
    geocoder = new google.maps.Geocoder();
    marker = new google.maps.Marker({position: map.center, map: map});
    markers.push(marker);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    google.maps.event.addListenerOnce(map, 'idle', function() {
        dom.loader.remove();
    });

    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    map.addListener('click', function(event) {
        // log(event);
        clearMarkers();
        addMarker(event.latLng);
        updateForm(event.latLng);
    });

    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Clear out the old markers.
        clearMarkers();

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();

        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }

            // Create a marker for each place.
            markers.push(new google.maps.Marker({map: map, position: place.geometry.location}));
            updateForm(place.geometry.location);

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });

        map.fitBounds(bounds);
    });

};
