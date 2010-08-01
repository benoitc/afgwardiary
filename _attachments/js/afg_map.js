

function initialize_map() {
	var latlng = new google.maps.LatLng( 32.68331909, 69.41610718 );
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
