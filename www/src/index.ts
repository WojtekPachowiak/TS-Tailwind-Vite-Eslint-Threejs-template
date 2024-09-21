import * as THREE from 'three';
import { initScene } from "./threejs_builtin.ts";
import {g} from "./globals.ts";
import {resizeViewport} from "./viewport.ts";

////////////////////////////////////////////////////////////////////////////////////////////////////////////
let loopIter = 0;
(async () => {
    initScene(document.getElementById("canvas"));
    animate();
})();



////////////////////////////////////////////////////////////////////////////////////////////////////////////


function animate() {
    g.DELTA_TIME = g.CLOCK.getDelta();

    // if delta time is too big, skip frame
    if (g.DELTA_TIME > 1) {
        g.DELTA_TIME = 0;
    }

    


    //// play all registered update functions
    Object.values(g.UPDATE_LOOP).forEach(f => (f as Function)());

    g.CONTROLS.update()
    g.STATS.update()
    g.RENDERER.render(g.SCENE, g.CAMERA);

    resizeViewport();

    requestAnimationFrame(animate);

    loopIter++;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function initListeners() {
//     window.addEventListener("resize", resizeViewport, false);
// }
