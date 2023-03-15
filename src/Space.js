import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import Navbar from './NavBar';
import ViewCube from './ViewCube';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

function Space() {
  const mountRef = useRef();
  // State variable to be passed to navbar component. This is manipulated 
  const [activePage, setActivePage] = useState('home');
  const [hovered, setHovered] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(0, 0, 5));
  const [Viewerstate, setViewerState] = useState(false);
  const [rotationX, setRotationX] = useState(0);

  const scene = new THREE.Scene();
  let mesh;
  
  
  function onHover(event) {
    setHovered(event.type === 'pointerover');
  }

  function onPointerDown(event) {
    console.log('Object clicked!');
  }
  
useEffect(() => {
  scene.background = new THREE.Color('#D3D3D3');
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  mountRef.current.appendChild(renderer.domElement);

  const loader = new STLLoader();
  const position = { x: 0, y: 0, z: 0 };
  
  //=================orbit controls start=========================================
  const controls = new TrackballControls(camera, renderer.domElement);
  controls.rotateSpeed = 2.0;
  controls.zoomSpeed = 0.3;
  controls.panSpeed = 0.2;
  controls.noZoom = false;
  controls.noPan = false;
  controls.staticMoving = true;
  controls.dynamicDampingFactor = 0.3;
  controls.keys = [65, 83, 68];
  //=================orbit controls end===========================================
  
  // Load STL file
  loader.load('/aboutpage.stl', function (geometry) {
    // create a material for the object with wireframe enabled
    const material = new THREE.MeshNormalMaterial({
      wireframe: true,
      wireframeLinewidth: 2,
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(0.05, 0.05, 0.05); // Scale the mesh down by a factor of 20
    mesh.position.set(position.x, position.y, position.z);
    mesh.rotation.x = -Math.PI / 2; // Rotate mesh to face correctly, towards viewer (may bad when i modeled that specific stl)
    scene.add(mesh);
  });

  const animate = function () {
    requestAnimationFrame(animate);

    camera.position.copy(cameraPosition);
    camera.lookAt(scene.position);
   

    controls.update();
    renderer.render(scene, camera);
  };

  animate();

  const onKeyDown = (event) => {
    switch (event.code) {
      case 'ArrowUp':
        setCameraPosition(cameraPosition.add(new THREE.Vector3(0, 0, -0.1)));
        break;
      case 'ArrowDown':
        setCameraPosition(cameraPosition.add(new THREE.Vector3(0, 0, 0.1)));
        break;
      case 'ArrowLeft':
        setCameraPosition(cameraPosition.add(new THREE.Vector3(-0.1, 0, 0)));
        break;
      case 'ArrowRight':
        setCameraPosition(cameraPosition.add(new THREE.Vector3(0.1, 0, 0)));
        break;
      default:
        break;
    }
  };
  
  window.addEventListener('keydown', onKeyDown);

  return () => {
    if (mountRef.current.contains(renderer.domElement)) {
      mountRef.current.removeChild(renderer.domElement);
    }
    renderer.dispose();
    window.removeEventListener('keydown', onKeyDown);
  };
}, [mountRef, cameraPosition]);
  
  //For verification of functionality
  useEffect(() => {
    console.log('activePage changed:', activePage);
  }, [activePage]);

return (
      <div
        id="inner"
        ref={mountRef}
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0' }}
      > 
      </div>
);
}

export default Space;

