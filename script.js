$("#1").delay(1000).fadeOut(1500,()=>{
    $("#2").delay(1000).show();
    $("#2").delay(1000).fadeOut(1000,()=>{
        $("#3").delay(1000).show();
        $("#3").delay(1000).fadeOut(1500,()=>{
            $("#loader").hide();
            $("#loaded").delay(1000).show();
            
        }); 
    });  
    });
    
function downloadpdf(){
    window.open("assets/resume.pdf", '_blank');
}