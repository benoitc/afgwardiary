

function initialize_map() {
	var latlng = new google.maps.LatLng( 33.0, 44.0 );
	var myOptions = {
		zoom: 16,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		scrollwheel: false
	};

	var o = document.getElementById( 'mapOverlay' );
	o.style['background'] = 'none';
	window.map = new google.maps.Map( o, myOptions );

}
