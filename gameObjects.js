AFRAME.registerComponent('wirefence', {
    schema: {
        
    },

    init: function () {
      this.createfence()  
    },

    createfence:function(){
        posX = -20
        posZ = 85
        for (i = 0;i<10;i++){
           var fence = document.createElement("a-entity")
           var fence2 = document.createElement("a-entity")
           var fence3 = document.createElement("a-entity")
           var fence4 = document.createElement("a-entity")

           posX = posX+5
           posY = 2.5
           posZ = posZ-10
           console.log("hi")
           fence.setAttribute("id","fence"+i)
           fence2.setAttribute("id","fence2"+i)
           fence3.setAttribute("id","fence3"+i)
           fence4.setAttribute("id","fence4"+i)

           fence.setAttribute("position",{x:posX,y:posY,z:-30})
           fence2.setAttribute("position",{x:posX,y:posY,z:80})
           fence3.setAttribute("position",{x:-30,y:posY,z:posZ})
           fence4.setAttribute("position",{x:30,y:posY,z:posZ})

           fence.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
           fence2.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
           fence3.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
           fence4.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")

           fence.setAttribute("static-body",{})
           fence2.setAttribute("static-body",{})
           fence3.setAttribute("static-body",{})
           fence4.setAttribute("static-body",{})

           fence.setAttribute("scale",{x:2,y:2,z:2})
           fence2.setAttribute("scale",{x:2,y:2,z:2})
           fence3.setAttribute("scale",{x:2,y:2,z:2})
           fence4.setAttribute("scale",{x:2,y:2,z:2})

           fence3.setAttribute("rotation",{x:0,y:90,z:0})
           fence4.setAttribute("rotation",{x:0,y:90,z:0})

           var sceneel = document.querySelector("#scene")
           sceneel.appendChild(fence)
           sceneel.appendChild(fence2)
           sceneel.appendChild(fence3)
           sceneel.appendChild(fence4)

        }
    }



});


AFRAME.registerComponent('boxes', {
  schema: {
    height:{type:"number",default:2},
    width:{type:"number",default:2},
    depth:{type:"number",default:2}

  },

  init: function () {

    px = [22.86, -17.35, -12.81, 0.44, -30.18, -25.89, 15.61, 29.68, 11.95, -15.40, -14.09, 34.76, 2.29, 21.77, 1.57, 34.72, 12.04, -10.90, 6.48, 15.66]
    pz = [54.56, -4.71, 14.91, 56.74, 41.13, 50.76, 57.84, 7.02, -5.24, -26.82, 27.59, -35.78, 34.52, 31.32, -9.22, 26.72, 48.90, 27.24, 9.94, 54.29]
    for (var i = 0;i<20;i++){
      var box = document.createElement("a-entity")
      posX = px[i]
      posY = 1
      posZ = pz[i]

      box.setAttribute("id","box"+i)
      box.setAttribute("position",{x:posX,y:posY,z:posZ})
      box.setAttribute("geometry",{primitive:"box",height:this.data.height,width:this.data.width,depth:this.data.depth})
      box.setAttribute("material",{
        src:"./images/boxtexture1.jpg",
        repeat:"1 1 1"
      })
      box.setAttribute("static-body",{})
      var sceneel = document.querySelector("#scene")
      sceneel.appendChild(box)

    }

  },

});

