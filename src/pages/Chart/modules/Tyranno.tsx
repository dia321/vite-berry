import { Canvas, Camera, useFrame, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, CameraControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const TyrannoMesh = () => {
  const gltf = useLoader(GLTFLoader, './tyranno/scene.gltf');
  return <primitive object={gltf.scene} position={[0, -3, 0.1]} />;
};

const Tyranno = () => {
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <Canvas>
        <Suspense fallback={null}>
          <CameraControls />
          <TyrannoMesh />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Tyranno;
