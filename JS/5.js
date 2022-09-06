//Cono
//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFAF4E6)

scene.fog = new THREE.Fog( 0x000000, 3, 100);
//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//gemetria
const textureloader = new THREE.TextureLoader()
const matcap = textureloader.load("./img/arcoiris.jpg")

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap
material.flatShading = true

const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 20;


//funcion
function animate() {
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();