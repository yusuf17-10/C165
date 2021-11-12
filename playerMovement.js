AFRAME.registerComponent('movement', {

    init: function () {
    this.walk()
    },

    walk:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowLeft" || e.key == "ArrowRight"){
                var soundel = document.querySelector("#sound-2")
                soundel.components.sound.playSound()
            }
        })
    }


});
