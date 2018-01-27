$(document).ready(function() {
  var clock = 0;
    
    $("#tens")
        .change(function() {
        
        $( "#tens option:selected").each(function() {
            clock = $(this).text(); 
            console.log(clock);
            return(clock);
        });
        $('#timer').text(clock);
        })
        .trigger("change");

    $("#singles")
        .change(function() {
        $( "#singles option:selected").each(function() {
            clock += $(this).text(); 
            console.log(clock);
            return(clock);
        });
        $('#timer').text(clock);
        })
        .trigger("change");

//console.log(workTen + workOne);

});




/*$( "select" )
  .change(function() {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "div" ).text( str );
  })
  .trigger( "change" ); */

    /*
     
    
/* all three of these do the same thing     
    /*var workTens = $('#tens option').prop('selected',true);
    console.log(workTens);*/
    
    /* var workTens = $("#tens").val();
    console.log(workTens); */

    /*var workTensSelected = $('#tens').find(":selected").text();
    console.log(workTensSelected); */ 
    

/* Doesn't do anything 
$("#tens").on("click", function() {
        $('value').prop('selected',true);
        
    }); */ 
    
    