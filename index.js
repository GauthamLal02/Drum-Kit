var_length=document.querySelectorAll(".drum").length;
for (var i=0; i<var_length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var but_html=this.innerHTML;
        make_sound(but_html);
        add_anim(but_html)

      
    });
    document.addEventListener("keydown",function(event){
        make_sound(event.key)
        add_anim(event.key)

    });


}
function make_sound(key){


    switch (key) {
        case "w":
            var tom1= new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare= new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash= new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;                        

        default:
            console.log(but_html);
            break;
    }
}   
function add_anim(currentkey){
    var active_but=document.querySelector("."+currentkey);
    active_but.classList.add("pressed");

    setTimeout(function(){
        active_but.classList.remove("pressed");
    }, 100);
} 