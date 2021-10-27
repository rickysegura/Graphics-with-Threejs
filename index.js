import * as THREE from "https://cdn.skypack.dev/pin/three@v0.130.0-tRS2zGZSAezE0B1845w6/mode=imports/optimized/three.js";


      //init

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

      const renderer = new THREE.WebGLRenderer();

      camera.position.z = 2;


      //set size and apppend renderer

      renderer.setSize(window.innerWidth, window.innerHeight);

      document.body.appendChild(renderer.domElement);


      //attempt

      const octGeo = new THREE.OctahedronGeometry();

      const octMat = new THREE.MeshBasicMaterial({ color: 0x548f6f, wireframe: true });

      const diamond = new THREE.Mesh(octGeo, octMat);

      scene.add(diamond);


      function animate() {

        requestAnimationFrame(animate);


        diamond.rotation.x += 0.01;

        diamond.rotation.y += 0.01;


        renderer.render(scene, camera);

      }


      animate();
