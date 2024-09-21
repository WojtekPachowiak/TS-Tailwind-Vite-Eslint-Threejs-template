import * as THREE from 'three';

export const g : {
    DELTA_TIME: number;
    CLOCK: THREE.Clock;
    MODEL3D: any;
    FRAME: number;
    PLAYING: boolean;
    LOOP_START: number;
    LOOP_END: number;
    STATS: any;
    RENDERER: THREE.WebGLRenderer;
    SCENE: THREE.Scene;
    UPDATE_LOOP: any;
    URL_PARAMS: URLSearchParams;
    CAMERA: THREE.PerspectiveCamera;
    CONTROLS: any;
} = {
    DELTA_TIME: 0,
    CLOCK: new THREE.Clock(),
    MODEL3D: null,
    FRAME: 0,
    PLAYING: true,
    LOOP_START: 0,
    LOOP_END: 0,
    STATS: null,
    UPDATE_LOOP: {},
    URL_PARAMS: new URLSearchParams(window.location.search),
    
};