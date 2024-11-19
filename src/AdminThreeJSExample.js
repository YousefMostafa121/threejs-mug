import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three/build/three.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Mug from "./assets/model1.glb";
import Image1 from "./assets/model1_img0.jpg";
import Image2 from "./assets/model2_img0.jpg";
import Image3 from "./assets/model3_img0.jpg";
import Image4 from "./assets/model4_img0.jpg";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry.js";
import "./ThreeJsExample.css";

let container,
  camera,
  scene,
  renderer,
  orbitControls,
  textureSelector,
  colorSelector,
  mesh,
  decalGeometry,
  material;

const init = () => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    20,
    container.offsetWidth / container.offsetHeight,
    1e-5,
    1e10
  );
  scene.add(camera);

  const hemispheric = new THREE.HemisphereLight(0xffffff, 0x222222, 1);
  scene.add(hemispheric);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true,
  });
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;

  container.appendChild(renderer.domElement);

  const loader = new GLTFLoader();

  const cameraPos = new THREE.Vector3(-0.2, 0.4, 1.4);
  orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableZoom = false;
  loader.load(
    Mug,
    (gltf) => {
      const object = gltf.scene;

      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      pmremGenerator.compileEquirectangularShader();

      object.updateMatrixWorld();
      const boundingBox = new THREE.Box3().setFromObject(object);
      const modelSizeVec3 = new THREE.Vector3();
      boundingBox.getSize(modelSizeVec3);
      const modelSize = modelSizeVec3.length();
      const modelCenter = new THREE.Vector3();
      boundingBox.getCenter(modelCenter);

      orbitControls.reset();
      orbitControls.maxDistance = modelSize * 50;
      orbitControls.enableDamping = true;
      orbitControls.dampingFactor = 0.07;
      orbitControls.rotateSpeed = 1.25;
      orbitControls.panSpeed = 1.25;
      orbitControls.screenSpacePanning = true;
      orbitControls.autoRotate = true;

      object.position.x = -modelCenter.x;
      object.position.y = -modelCenter.y;
      object.position.z = -modelCenter.z;
      camera.position.copy(modelCenter);
      camera.position.x += modelSize * cameraPos.x;
      camera.position.y += modelSize * cameraPos.y;
      camera.position.z += modelSize * cameraPos.z;
      camera.near = modelSize / 100;
      camera.far = modelSize * 100;
      camera.updateProjectionMatrix();
      camera.lookAt(modelCenter);

      object.traverse((obj) => {
        if (
          obj instanceof THREE.Mesh &&
          obj.name === "Mug_Porcelain_PBR001_0"
        ) {
          material = obj.material;
          mesh = obj;

          textureSelector.addEventListener("input", (event) => {
            material.map = convertImageToTexture(event.target.value);
          });
        } else if (
          obj instanceof THREE.Mesh &&
          obj.name === "Mug_Porcelain_PBR002_0"
        ) {
          const material = obj.material;
          colorSelector.addEventListener("input", (event) => {
            material.color.set(event.target.value);
          });
        }
      });

      scene.add(object);
      onWindowResize();
    },
    function (error) {
      console.error(error);
    }
  );
};

const onWindowResize = () => {
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const convertImageToTexture = (image) => {
  const textureLoader = new THREE.TextureLoader();
  let texture = textureLoader.load(image);
  texture.encoding = THREE.sRGBEncoding;
  texture.flipY = true;
  return texture;
};

const AdminThreeJSExample = ({ uploadedImagee, color_value }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const ref = useRef(null);
  const textureRef = useRef(null);
  const colorRef = useRef(null);

  useEffect(() => {
    container = ref.current;
    textureSelector = textureRef.current;
    colorSelector = colorRef.current;

    const resizeHandler = () => onWindowResize();

    init();
    animate();

    window.addEventListener("resize", resizeHandler, false);

    return () => {
      window.removeEventListener("resize", resizeHandler, false);
    };
  }, []);

  // Function to update the texture when the image URL changes
  useEffect(() => {
    if (uploadedImagee) {
      const texture = convertImageToTexture(uploadedImagee);
      if (material) {
        material.map = texture;
        material.needsUpdate = true;
      }
    }
  }, [uploadedImagee]);

  const animate = useCallback(() => {
    requestAnimationFrame(() => animate());
    orbitControls.update();
    renderer.render(scene, camera);
  }, []);

  return (
    <div className="preview">
      <div className="controls">
        <div>
          <p>Texture</p>
          <select id="imageSelector" ref={textureRef}>
            <option value={Image1}>Image 1</option>
            <option value={Image2}>Image 2</option>
            <option value={Image3}>Image 3</option>
            <option value={Image4}>Image 4</option>
          </select>
        </div>
        <div>
          <p>Color</p>
          <input
            type="color"
            id="colorPicker"
            name="favcolor"
            defaultValue="#ffffff"
            value={color_value}
            ref={colorRef}
          />
        </div>
      </div>
      <div ref={ref} className="bg-red-600 -mt-[15rem] z-0" />
    </div>
  );
};

export default AdminThreeJSExample;
