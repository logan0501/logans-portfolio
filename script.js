const hello = document.getElementById("1")
const logan = document.getElementById("2")
const habit = document.getElementById("3")

$("#1").delay(1000).fadeOut(1000,()=>{
   
    $("#2").delay(1000).show();
    $("#2").delay(1000).fadeOut(1000,()=>{
        $("#3").delay(1000).show();
        $("#3").delay(1000).fadeOut(1500,()=>{
            $("#loader").hide();
            $("#loaded").delay(1000).show();
            
        }); 
    });  
    });
    
    