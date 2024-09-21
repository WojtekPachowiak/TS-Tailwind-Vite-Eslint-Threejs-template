import { g } from './globals.ts';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import * as THREE from 'three';

export function initScene(canvasDomElement) {



  //// FPS COUNTER
  const stats = new Stats();
  g.STATS = stats;
  document.body.appendChild(stats.dom);
  stats.dom.classList.add("hidden");



  //// SCENE
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  g.SCENE = scene;




  //// RENDERER
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasDomElement,
  });
  g.RENDERER = renderer;



  //// GRID HELPER
  const size = 10;
  const divisions = 5;
  const gridHelper = new THREE.GridHelper(size, divisions, 0xb5af9f, 0xb5af9f);
  const floorOffset = -0.0;
  gridHelper.translateY(floorOffset);
  scene.add(gridHelper);



  //// AXES HELPER
  const axesHelper = new THREE.AxesHelper(0.2);
  axesHelper.position.set(0, 0.01, 0);
  scene.add(axesHelper);



  //// CAMERA
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(2 , 1.5 , 2 );
  g.CAMERA = camera;


  //// CAMERA CONTROLS
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  // controls.zoomSpeed = 20;
  controls.target.set(0, 1, 0);
  g.CONTROLS = controls;



  ////CLOCK
  const clock = new THREE.Clock();
  g.CLOCK = clock;
  g.DELTA_TIME = 0;



  //// LIGHTS
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);



  // GEOMETRY
  const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
  const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  torus.position.set(0, 1, 0);
  scene.add(torus);







}

