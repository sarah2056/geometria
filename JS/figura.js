//
//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x002232)

scene.fog = new THREE.Fog( 0x000000, 3, 100);
//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//renderisado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//gemetria
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0x135878 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 30;

//funcion
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

