import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Sphere } from '@react-three/drei';
import { MeshDistortMaterial } from '@react-three/drei';
import texture from './assets/download.jpeg'
import { Model } from './Scene-processed';
import './App.css'

function App() {
  return (
    <div className="App" role="main">
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <Box/>
      </Canvas>

      <Canvas className='canvas'>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <AnimatedSphere/>
      </Canvas>

      <Canvas className='canvas'> 
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <Model/>
      </Canvas>


    </div>
  );
}

function Box(){
  
  const colorMap = useLoader(TextureLoader,texture)

  return (
    <mesh rotation={[90,0,20]}>
      <boxBufferGeometry attach='geometry' args={[3,3,3]}  />
      <meshNormalMaterial attach={'material'} />
    </mesh>
  )
}

function AnimatedSphere(){
  return <Sphere visible args={[1,100,200]} scale={2}>
      <MeshDistortMaterial color={'red'} attach='material' distort={0.3} speed={1.5} roughness={0}/>
  </Sphere>
}

export default App;

