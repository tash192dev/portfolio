console.log("Welcome to Tash's Portfolio!");
// inside script.js
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 0.1, 1000);
camera.position.z = 5;

let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
});

// Shader material
let material = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 } },
  vertexShader: document.getElementById('vertexShader').textContent,
  fragmentShader: document.getElementById('fragmentShader').textContent,
  wireframe: false
});

// Sphere mesh
let geometry = new THREE.IcosahedronGeometry(1, 64);
let sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

function animate(){
  material.uniforms.uTime.value = performance.now() * 0.001;
  sphere.rotation.y += 0.002;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
