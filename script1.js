function animate(){
    setTimeout(()=>{ $("#_1").css('visibility','visible'); }, 1000); 
    setTimeout(()=>{ $("#_2").css('visibility','visible'); }, 2000);
    setTimeout(()=>{ $("#_3").css('visibility','visible'); }, 3000);
    setTimeout(()=>{ $("#_4").css('visibility','visible'); }, 4000);
    setTimeout(()=>{ $("#_5").css('visibility','visible'); }, 5000); 
    setTimeout(()=>{ $("#_6").css('visibility','visible'); }, 6000);
    setTimeout(()=>{ 
        $("#title").fadeIn();
        $("#title").fadeIn("slow");
        $("#title").fadeIn(3000); 
    }, 6500);
    setTimeout(function(){
        window.location.href = 'gamepage.html';
    }, 8000);
}