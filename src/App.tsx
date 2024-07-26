import { Helper, PivotControls, useHelper } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef } from "react";
import * as THREE from 'three';

extend(THREE.Box3);

const App = () => {
    const refA = useRef<THREE.Mesh>();
    const refB = useRef<THREE.Mesh>()

    useFrame(() => {
        const cubeA = refA.current!
        const cubeABBox = cubeA?.userData.boundingBox as THREE.Box3;
        cubeABBox.setFromObject(cubeA);

        const cubeB = refB.current!
        const cubeBBBox = cubeB?.userData.boundingBox as THREE.Box3;
        cubeBBBox.setFromObject(cubeB);

        if (cubeABBox.intersectsBox(cubeBBBox)) {
            console.log('✅ YES')
        } else {
            console.log('❌ NO')
        }
    })  

    return (
        <>
            <PivotControls>
                <mesh ref={refA as any}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color={"orange"} transparent opacity={0.5} />

                    <Helper args={["royalblue"]} type={THREE.BoxHelper} />

                    {/* @ts-ignore */}
                    <box3 attach={"userData-boundingBox"} args={[new THREE.Vector3(), new THREE.Vector3()]} />
                </mesh>
            </PivotControls>


            <mesh ref={refB as any} position-x={4}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color={"orange"} transparent opacity={0.5} />

                <Helper args={["royalblue"]} type={THREE.BoxHelper} />

                {/* @ts-ignore */}
                <box3 attach={"userData-boundingBox"} args={[new THREE.Vector3(), new THREE.Vector3()]} />
            </mesh>

            <mesh position-y={-1} rotation-x={Math.PI / 2}>
                <planeGeometry args={[10, 10]} />
                <meshBasicMaterial color={"aqua"} side={THREE.DoubleSide} />
            </mesh>

            {/* <OrbitControls /> */}
        </>
    )
}

export default App