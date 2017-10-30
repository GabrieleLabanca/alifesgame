$( function() {
    var handle = $( "#time-slider" );
    $( "#time-div" ).slider({
        min: 8000,
        max: 100000,
	step:100,
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value ),
	    setInterval(time_roll, ui.value/100)
        }
    });
} );
