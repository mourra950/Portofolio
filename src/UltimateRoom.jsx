import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./ultimateRoom.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[1.44, 0.86, -0.6]} />
      <mesh geometry={nodes.room.geometry} material={materials['WALL COLOR']} position={[-0.43, 1.44, 0.13]} />
      <mesh geometry={nodes.second_floor.geometry} material={materials['WALL COLOR']} position={[-0.1, 1.33, -0.31]} />
      <mesh geometry={nodes.bed_base.geometry} material={materials['5ASHABET EL SERIR']} position={[-1.1, 0.05, -0.35]} scale={[1.39, 1, 1.39]} />
      <mesh geometry={nodes.bed_top.geometry} material={materials.MARTABA} position={[-1.1, 0.16, -0.35]} scale={[1.39, 1, 1.39]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.010']} position={[-0.64, 0.21, -0.46]} scale={[1.39, 1, 1.39]} />
      <mesh geometry={nodes.pillow1.geometry} material={nodes.pillow1.material} position={[-2.11, 0.27, -0.76]} scale={[1.39, 1, 1.39]} />
      <mesh geometry={nodes.pillow2.geometry} material={nodes.pillow2.material} position={[-2.14, 0.22, 0.33]} scale={[1.39, 1, 1.39]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['5ASHABET EL SERIR']} position={[-1.91, 2.42, -0.33]} />
      <mesh geometry={nodes.tablelegs.geometry} material={materials['5ASHABET EL SERIR']} position={[-1.91, 2.1, -0.33]} />
      <group position={[-1.92, 2.54, -1.1]}>
        <mesh geometry={nodes.Cube010.geometry} material={materials.red} />
        <mesh geometry={nodes.Cube010_1.geometry} material={materials.blue} />
        <mesh geometry={nodes.Cube010_2.geometry} material={materials.green} />
        <mesh geometry={nodes.Cube010_3.geometry} material={materials.white} />
        <mesh geometry={nodes.Cube010_4.geometry} material={materials.yellow} />
        <mesh geometry={nodes.Cube010_5.geometry} material={materials.purple} />
        <mesh geometry={nodes.Cube010_6.geometry} material={materials.border} />
      </group>
      <mesh geometry={nodes.batman.geometry} material={materials['Material.002']} position={[0.2, 2.67, -1.7]} scale={1.47} />
      <mesh geometry={nodes.carpet.geometry} material={materials['Material.018']} position={[-0.57, 0.04, 1.76]} scale={[2.26, 1, 1]} />
      <mesh geometry={nodes.carpet002.geometry} material={materials['Material.018']} position={[-0.49, 1.82, -0.49]} scale={1.28} />
      <group position={[-1.97, 2.97, -0.12]}>
        <mesh geometry={nodes.Cube012.geometry} material={materials.frame} />
        <mesh geometry={nodes.Cube012_1.geometry} material={materials.lcd} />
        <mesh geometry={nodes.Cube004.geometry} material={materials.frame} position={[-0.06, -0.24, 0]} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.frame} position={[0.01, -0.49, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('./ultimateRoom.glb')
