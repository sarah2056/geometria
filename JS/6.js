//Lathe
//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x002232);
let loader=new THREE.TextureLoader()
loader.load("../img/fondo.jpg",function(texture){
    scene.background= texture
})


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//gemetria

const textureloader = new THREE.TextureLoader()
const matcap = textureloader.load("./img/color.jpg")

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap
material.flatShading = true

const geometry = new THREE.RingGeometry( 1, 5, 32 );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 20;


//funcion
function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
}
animate();

