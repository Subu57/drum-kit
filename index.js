for(var i=0;i<7;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",click);
}
function click()
{
  var buttoninner = this.innerHTML;
  makesound(buttoninner);
  anime(buttoninner);
}

document.addEventListener("keydown",function(event){
  makesound(event.key);
  anime(event.key);
});


function makesound(key){
  switch (key) {
    case "w":
     var tom1=new Audio("sounds/tom-1.mp3");
     tom1.play();
    break;
    case "a":
     var tom2=new Audio("sounds/tom-2.mp3");
     tom2.play();
    break;
    case "s":
     var tom3=new Audio("sounds/tom-3.mp3");
     tom3.play();
    break;
    case "d":
     var tom4=new Audio("sounds/tom-4.mp3");
     tom4.play();
    break;
    case "j":
     var snare=new Audio("sounds/snare.mp3");
     snare.play();
    break;
    case "k":
     var crash=new Audio("sounds/crash.mp3");
     crash.play();
    break;
    case "l":
     var kick=new Audio("sounds/kick-bass.mp3");
     kick.play();
    break;
    default:console.log(buttoninner);
ss
  }

}
function anime(current)

{
  var abutton=document.querySelector("."+current);
  abutton.classList.add("pressed");

  setTimeout(function(){abutton.classList.remove("pressed");},100);
}
