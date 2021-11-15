$.getJSON( "arenaMinorSchedule.json", function( data ) {
    var items = [];
    $.each(data, function(majorItems){
        $.each(majorItems, function(key,val) {
            items.push( "<li id>" + key + " " + val + "</li>" );
        });
    });
    //$.each( data, function( key, val ) {
      //items.push( "<li id='" + key + "'>" + val + "</li>" );
    //});
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });