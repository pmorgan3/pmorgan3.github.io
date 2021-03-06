import * as THREE from 'three'
import React, { useEffect } from 'react'
import { useSprings, a } from 'react-spring/three'

const num = 35
//const colors = ['#4D183D', '#840038', '#BD0035', '#FA4637', '#FDB834']
//const colors = ['#7F87B2', '#83B2D0', '#95DAB6', '#F2E6B1', '#DC8580']

// BRIGHT color pallette
const colors = [
  '#CA64F9',
  '#417DFF',
  '#007669',
  '#FF7093',
  '#FFCE58',
  '#7DFBE2',
  '#00DEEC',
]

/**
 *  Sets a random position, color, and rotation based off the 'seed' i
 */
const random = (i: number) => {
  const r = Math.random()
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [10 + r * 14, 1 + r * 14, 10],
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)],
  }
}
const data = new Array(num).fill(0).map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  }
})
export const Content = () => {
  const [springs, sets] = useSprings(num, (i: number) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 200, friction: 50 },
  }))

  // This sets the amount of time between transitions.
  // Currently, it's at 15 seconds.
  useEffect(
    () =>
      void setInterval(
        () => sets((i: number) => ({ ...random(i), delay: i * 40 })),
        15000
      ),
    [sets]
  )
  return (
    <>
      {data.map((d, index) => (
        <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
          <planeBufferGeometry
            attach='geometry'
            args={d.args as [number?, number?, number?, number?]}
          />
          <a.meshStandardMaterial
            attach='material'
            color={springs[index].color}
            roughness={0.75}
            metalness={0.5}
          />
        </a.mesh>
      ))}
    </>
  )
}

export const Lights = () => {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, -150, -2500]}
        penumbra={1}
        shadowMapWidth={2048}
        shadowMapHeight={2048}
      />
    </group>
  )
}
