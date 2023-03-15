import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ViewCube(props) {
  const viewCubeRef = useRef();

  useEffect(() => {
    const size = props.size || 100;
    const thickness = props.thickness || 2;
    const fontSize = props.fontSize || 20;
    const fontColor = props.fontColor || '#000000';
    const backgroundColor = props.backgroundColor || '#ffffff';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(backgroundColor, 0);
    renderer.setSize(size, size);

    const viewCube = new THREE.Group();
    viewCube.add(createFace('right', size, thickness, fontColor, fontSize));
    viewCube.add(createFace('left', size, thickness, fontColor, fontSize));
    viewCube.add(createFace('up', size, thickness, fontColor, fontSize));
    viewCube.add(createFace('down', size, thickness, fontColor, fontSize));
    viewCube.add(createFace('front', size, thickness, fontColor, fontSize));
    viewCube.add(createFace('back', size, thickness, fontColor, fontSize));

    scene.add(viewCube);

    const animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    viewCubeRef.current.appendChild(renderer.domElement);

    return () => {
      if (viewCubeRef.current.contains(renderer.domElement)) {
        viewCubeRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  function createFace(name, size, thickness, fontColor, fontSize) {
    const face = new THREE.Group();

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = fontColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillText(name.toUpperCase(), size / 2, size / 2);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });

    const planeGeometry = new THREE.PlaneGeometry(size, size, 1);
    const planeMesh = new THREE.Mesh(planeGeometry, material);
    planeMesh.position.setZ(size / 2 + thickness / 2);

    face.add(planeMesh);

    const borderGeometry = new THREE.BoxGeometry(size + thickness * 2, size + thickness * 2, thickness);
    const borderMesh = new THREE.Mesh(borderGeometry, new THREE.MeshBasicMaterial({ color: '#000000' }));
    borderMesh.position.setZ(size / 2);

    face.add(borderMesh);

    return face;
  }

  return <div ref={viewCubeRef} style={{ position: 'absolute', top: '0', right: '0', margin: '10px' }} />;
}

export default ViewCube;
