$(document).ready(function () {
    var clockArr = [2, 5],
        clock;  

    //change value of work timer
    //tens digit
    $("#tens")
        .change(function () {
        
        $("#tens option:selected").each(function () {
            var newTens =$(this).text(); 
            clockArr.splice(0, 1, newTens);
                console.log(clockArr);    
        });
        clock = clockArr.join(''); 
        $('#timer').text(clock + ":00");
        return clock;
        })
        .trigger("change");

    //singles digit
    $("#singles")
        .change(function () {
        
        $("#singles option:selected").each(function () {
            var newSingles = $(this).text(); 
            clockArr.splice(1, 1, newSingles);
                console.log(clockArr);    
        });
        clock = clockArr.join(''); 
        $('#timer').text(clock + ":00");
        return clock;
        })
        .trigger("change");

    
/* alert functionality */    
    
    function TimeUpSound() {
        $('#alarm-sound')[0].play();
        setTimeout(function(){alert("Time's Up!");},1000);
        }    
    
    function TimeUp() {
        setTimeout(function(){alert("Time's Up!");},1000);
        }    

    
/* timer functionality */    

    function timerRun () {
        console.log("countdown has started");
        var mins = Number(clock),
            secs = mins * 60,
            currentMins = 0,
            currentSecs = 0,
            
        // countdown function //    
            Countdown = function () { 
            secs = secs - 1;
            if ( secs <= 0 ) {
                clearInterval(timerFunc);
                if ($("#audio").hasClass("true")) {
                    TimeUpSound();
                } else {
                    TimeUp();    
                }
                
                return;
            }                
                
            currentMins = Math.floor(secs / 60);
            currentSecs = secs % 60;
            if (currentSecs <= 9) {
                currentSecs = "0" + currentSecs;
            }
            if (currentMins <= 9) {
                currentMins = "0" + currentMins;
            }
            $("#timer").text(currentMins + ":" + currentSecs); 
                console.log(currentMins + ":" + currentSecs);
        },
            
            timerFunc = setInterval(Countdown, 1000);
    }
        
         
/* Start button functionality */     
    $("#start").on("click", function() {
        timerRun();
        $(this).addClass("running");
    });
    
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
    
    