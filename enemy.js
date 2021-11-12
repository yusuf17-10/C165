
var shoot_timer

AFRAME.registerComponent('enemy-bullets', {
 
    init: function () {
        this.life = 5
        shoot_timer = setInterval(this.shoot_enemy_bullet,10000)
    },


    shoot_enemy_bullet :function(){
        var enemy_bulletel = document.querySelectorAll(".enemyclass")
        for (var i = 0;i<enemy_bulletel.length;i++) {
            var enemy = enemy_bulletel[i].object3D
            var player = document.querySelector("#weapon").object3D
            var enemybullet = document.createElement("a-entity") 
                enemybullet.setAttribute("geometry", { primitive: "sphere", radius: 0.2 })
                console.log("hello")
                enemybullet.setAttribute("material", "color", "grey")
                //enemybullet.setAttribute("dynamic-body",{shape:"sphere",mass:0})
            var position = enemy_bulletel[i].getAttribute("position")
            enemybullet.setAttribute("position",{x:position.x+1.5,y:position.y+3.5,z:position.z})
            var scene = document.querySelector("#scene")
            scene.appendChild(enemybullet)
            var position1 = new THREE.Vector3()
            var position2 = new THREE.Vector3()

            player.getWorldPosition(position1)
            enemy.getWorldPosition(position2)
            var direction = new THREE.Vector3()
            direction.subVectors(position1,position2).normalize()
            enemybullet.setAttribute("velocity",direction.multiplyScalar(10))
            enemybullet.setAttribute("dynamic-body",{shape:"sphere",mass:'0'})
        }

    }    
    
});
