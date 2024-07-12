/* import React from 'react'
import { useEffect } from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import Cat from './Cat.glb';
import Dog from './Dog.glb';
import Flower from './Flower.glb';

export default function View() {
    const ref = React.useRef(null);
    const objects=[
      [Cat,11.11,77.77],[Dog,12.5,75],[Flower,14.3,71.4]
    ]

    useEffect(()=>{
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 45, 1, 0.1, 1000 );
      const renderer = new THREE.WebGLRenderer();
      renderer.setClearColor(0x000000, 0)
      renderer.setSize( 400, 400 );
      if (ref.current.children.length === 0) {
        ref.current.appendChild(renderer.domElement);
      }

      const rectLight = new THREE.RectAreaLight( 0xffffff, 1, 5, 5 );
      rectLight.position.set( 0, 3, 0 );
      rectLight.lookAt( 0, 0, 0 );
      scene.add( rectLight )

      const light = new THREE.AmbientLight( 0xffffff ); // soft white light
      scene.add( light );

      let currentInd=0;
      let mixer;
      let animeList = [];
      let actions = [];
      let currentClass='start'

      function loadAndPlay(){
        const loader = new GLTFLoader();
        loader.load(
          objects[currentInd][0],
          function (gltf) {//describes the behavior of the animated model , preparing animation frames
            if (scene.children.length > 2) {
              scene.remove(scene.children[2]);
            }
            scene.add(gltf.scene);
            mixer = new THREE.AnimationMixer(gltf.scene);
            gltf.animations.forEach((clip) => {//for each animation (in this case we have only 1)
              mixer.clipAction(clip).play();//animation should be played immediatly
              actions=[]
              actions.push(mixer.clipAction(clip));
            });
            animeList=[]
            animeList.push(mixer);//add the finalized animations to an array
          },
          undefined,
          function (error) {
            console.error(error);
          }
        );
        if(ref.current.classList.contains('finish')){
          ref.current.classList.remove('finish')
        }
        ref.current.classList.add('start')
        currentClass='start'
      }

      loadAndPlay()

      camera.position.z=0;
      camera.position.y=4;
      camera.position.x=0;
      camera.lookAt(0,0,0)
  
      let animationId;
      const clock = new THREE.Clock();
      function animate() {
        for (const mixer of animeList) {
          mixer.update(clock.getDelta());
        }
        actions.forEach((action) => {
          const progress = (action.time / action.getClip().duration) * 100;
          if(progress>=objects[currentInd][2] && currentClass==='start'){
            currentClass='finish'
            ref.current.classList.remove('start')
            ref.current.classList.add('finish')
          }
          if (progress >= 99 && progress < 100) {
            actions=[]
            console.log(action.getClip().duration);
            if(currentInd==2){currentInd=0}else{currentInd++}
            loadAndPlay()
          }
        });

        animationId=requestAnimationFrame( animate );
        renderer.render( scene, camera );
      }
      animate()
  
      return () => {
        renderer.domElement.remove();
        renderer.dispose();
      };
  
    },[])
  
    return (
      <div style={{width:'400px',height:'400px',left:'-400px'}} ref={ref}></div>
    )
}
 */