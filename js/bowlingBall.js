AFRAME.registerComponent('bowling-ball',{
init:function(){
 this.createBowls()
},
createBowls: function(){
 window.addEventListener('keydown',(e) => {
  if(e.key === 'f'){
     var bowlingBall = document.createElement('a-entity')
     bowlingBall.setAttribute('geometry',{
         primitive : 'sphere',
         radius : 0.1
     })
     bowlingBall.setAttribute('material','color','blue')
     
     var camera = document.querySelector('#camera').object3D
     var direction = new THREE.Vector3()

     camera.getWorldDirection(direction)

     bowlingBall.setAttribute('position',{x: 0, y : 1.75,z : 0})
     bowlingBall.setAttribute('velocity',direction.multiplyScalar(-5))

     var scene = document.querySelector('#scene');

     scene.appendChild(bowlingBall)
  }
 })

}
})