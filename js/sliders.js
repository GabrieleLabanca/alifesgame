$( function() {
    var handle = $( "#time-slider" );
    $( "#time-div" ).slider({
        min: 8000,
        max: 200000,
	step: 1000,
        value: 100000,
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value ),
            clearInterval(timer),
            timer = setInterval(time_roll, ui.value/100)
        }
    });
} );


$( function() {
    var handle = $( "#sheep-speed-slider" );
    $( "#sheep-speed-div" ).slider({
        min: 0,
        max: 50,
	step: 10,
        value: 10,
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value ),
            sheep_speed = ui.value;
        }
    });
} );
