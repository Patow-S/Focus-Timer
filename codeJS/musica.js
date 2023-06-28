var botonesConteiner =document.getElementById("botones-conteiner");

botonesConteiner.addEventListener("click".function(event){
    if(event.target.tagName === "BUTTON"){
        var soundFile = event.target.getAttribute("data-sound");
        if(soundFile){
            var sound = Howl({
                src: [soundFile]
            });
        }
    }
})