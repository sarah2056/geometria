//Forma
//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x002232);
let loader=new THREE.TextureLoader()
loader.load("../img/view-of-white-crumpled-paper.jpg",function(texture){
    scene.background= texture
})

scene.fog = new THREE.Fog( 0x000000, 3, 100);
//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//renderisado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//gemetria
const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const textureloader = new THREE.TextureLoader()
const matcap = textureloader.load("./img/HD.jpg")

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap
material.flatShading = true

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 50;

//funcion
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
