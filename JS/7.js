//mesh
//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff)


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//gemetria
const material = new THREE.MeshStandardMaterial();
material.color.set("#FF00F0")
material.metalness = 1;
material.roughness = 0;

const direccionluz = new THREE.DirectionalLight(0xffffff, 1000);
direccionluz.position.set(1,3,1)
scene.add(direccionluz)

class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 10 );
const geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 28;


//funcion
function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
}
animate();
