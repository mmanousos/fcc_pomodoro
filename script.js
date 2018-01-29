$(document).ready(function() {
    var clockArr = [2, 5];
    var clock;  

    //change value of work timer
    //tens digit
    $("#tens")
        .change(function() {
        
        $( "#tens option:selected").each(function() {
            var newTens = $(this).text(); 
            clockArr.splice(0, 1, newTens);
                console.log(clockArr);    
        });
        clock = clockArr.join(''); 
        $('#timer').text(clock);
        return clock;
        })
        .trigger("change");

    //singles digit
    $("#singles")
        .change(function() {
        
        $( "#singles option:selected").each(function() {
            var newSingles = $(this).text(); 
            clockArr.splice(1, 1, newSingles);
                console.log(clockArr);    
        });
        clock = clockArr.join(''); 
        $('#timer').text(clock);
        return clock;
        })
        .trigger("change");

/* timer functionality */    

    function timerRun () {
        var count = Number(clock);
            console.log(count);
        var timer = count*60;
            console.log(timer);

//        var counter = setInterval(timer, 1000); //1000 will run it every 1 second

        if (timer > 0) {
            setInterval(function(){ 
                for (var i = timer; i > 0; i--) {    
                console.log(i);
                }
                }, 1000);
        } else {
            clearInterval(i);
            alert("Time's up!");
            return;      
        }
    }
    
        
  /*      
        while (timer > 0) {
            setInterval(function(){ 
                timer = timer-1;
                console.log(timer);
            }, 1000);
        }
        if (timer <= 0)  {
             //counter ended, do something here
             clearInterval(timer);
             alert("Time's up!");
             return;
          }
        
          //Do code for showing the number of seconds here
    }
    */ 
             
/* Start button functionality */     
    $("#start").on("click", function() {
        timerRun();
        $(this).addClass("running");
    })
    
 /*   Save this behavior until after the countdown has completed.
    //change value of break timer
    //tens digit
    $("#ten")
        .change(function() {
        
        $( "#ten option:selected").each(function() {
            var newTen = $(this).text(); 
            clockArr.splice(0, 1, newTen);
                console.log(clockArr);    
        });
        clock = clockArr.join(''); 
        $('#timer').text(clock);
        })
        .trigger("change");

    //singles digit
    $("#one")
        .change(function() {
        
        $( "#one option:selected").each(function() {
            var newOne = $(this).text(); 
            clockArr.splice(1, 1, newOne);
                console.log(clockArr);    
        });
        clock = clockArr.join(''); 
        $('#timer').text(clock);
        })
        .trigger("change");
   */ 
    

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
    
    