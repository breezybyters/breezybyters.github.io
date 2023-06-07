import * as THREE from 'three';
import * as noise from 'noisejs';

// Get reference to parent div element
const parentDiv = document.getElementById('blob-animation');

// Create new canvas element and append to parent div
const canvas = document.createElement('canvas');
parentDiv.appendChild(canvas);

// Create new WebGLRenderer instance and set options
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});

// Set renderer size and pixel ratio to match parent div
renderer.setSize(parentDiv.clientWidth, parentDiv.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Create new scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    parentDiv.clientWidth / parentDiv.clientHeight,
    0.1,
    1000
);

// Set camera position
camera.position.z = 3;

// Create new sphere geometry and material
var geometry = new THREE.SphereGeometry(1, 128, 128);
const material = new THREE.MeshNormalMaterial({
    wireframe: true,
});

// Create new mesh and add to scene
const blob = new THREE.Mesh(geometry, material);
scene.add(blob);

// Create new noise object
const noiseObj = new noise.Noise(Math.random());

// Update function
function update(sphere) {
    // K: noise frequency
    // T: noise speed
    // H: noise height
    const k = 2;
    const t = 0.002;
    const h = 0.3;

    var time = performance.now() * t;

    // Get reference to vertex positions attribute
    const positions = sphere.geometry.attributes.position;

    // Iterate over each vertex
    for (let i = 0; i < positions.count; i++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positions, i);

        // Calculate noise value
        const noiseValue = noiseObj.perlin2(vertex.x * k + time, vertex.y * k, vertex.z * k);

        // Scale vertex position based on noise value
        vertex.normalize().multiplyScalar(1 + h * noiseValue);

        // Update position in buffer attribute
        positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    // Mark geometry as needing update
    positions.needsUpdate = true;
    sphere.geometry.computeVertexNormals();

    // Rotate sphere
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;

    // Move sphere around
    sphere.position.x = Math.sin(time * 0.5) * 0.5;
    sphere.position.y = Math.cos(time * 0.5) * 0.5;

    // Scale sphere
    sphere.scale.x = 1 + Math.sin(time * 0.5) * 0.1;
    sphere.scale.y = 1 + Math.cos(time * 0.5) * 0.1;

}

// Create animation loop
function animate() {
    requestAnimationFrame(animate);
    update(blob);
    renderer.render(scene, camera);
}

// Call animation loop
animate();
