var character;
var str=new Array();
var s,correct=0,wrong=0;
var wrongstr="";
$("body").keypress(function(event){
    var key= String.fromCharCode(event.keyCode);
    input_character(key);
});


function fun(){
    quiz();
}



function quiz()
{
    fetch('https://random-words-api.herokuapp.com/w?n').then((data)=>{ return data.json(); }) 
   .then((actualdata)=>{  
       s=actualdata[0];
       for(var i=0;i<s.length;i++)
       {
           str[i]=s[i].toLowerCase();
       }
       show(str);  
      })  .catch((error)=>{console.log(error);})

}


function show(str){
    for(var i=0 ;i<str.length;i++){
    var li=document.createElement("li");
    var text=document.createTextNode("_");
    li.appendChild(text);
    document.getElementById("word").appendChild(li);
    }
}






function input_character(ch){
    
    ch=ch.toLowerCase();
    if(str.indexOf(ch)!=-1)
    {
        while( str.indexOf(ch)!=-1 )
        {
            document.getElementById("word").children[str.indexOf(ch)].innerHTML=ch;
            document.getElementById("word").children[str.indexOf(ch)].style.color="white";
            str[str.indexOf(ch)]=0;
            correct++;
        }
        if(correct==str.length)
            {
                $("#dialog").text("Congratulation!!  You Wins");
                $(".modal-container").css('visibility','visible');
            }
    }

    
    else{
        wrong++;
        
        $("#_"+wrong).css('visibility','visible');   
        if(wrong==1)
        {
            wrongstr=wrongstr+ch;
            $("#wrong-letters").val(wrongstr);
        }
        else if(wrong==6)
        {
            $("#dialog").text('Better Luck Next Time!!  You Lose \n word is:-  "'+s+'"');
            $(".modal-container").css('visibility','visible');
        }
        else{
            wrongstr=wrongstr+", "+ch;
            $("#wrong-letters").val(wrongstr);
        }
    }
    
    
}
