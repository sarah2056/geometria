//cylinder
//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x002232)


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//gemetria

const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshNormalMaterial();
material.flatShading = true
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 55;


//funcion
function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

}
animate();