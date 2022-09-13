import { useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { Physics, useBox, usePlane } from "@react-three/cannon"

// Main function
export default function Engine() {
	return(
		<div className="scene">
			<Canvas>
				<FrameLimiter>
					<Scene />
				</FrameLimiter>
			</Canvas>
		</div>
	)
}

// Utils
function Scene() {
	return(
		<>
			<OrbitControls />
			<Stars />
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 15, 10]} angle={0.3} />
			<Physics>
				<Box />
				<Plane />
			</Physics>
		</>
	)
}

function FrameLimiter(props, {limit = 60}) {
	const {invalidate, clock, advance} = useThree()

    useEffect(() => {
        let delta = 0
        const interval = 1/limit
        const update = () => {
            requestAnimationFrame(update)
            delta += clock.getDelta()

            if (delta > interval) {
                invalidate()
                delta = delta % interval
            }
        }

        update()
    }, [])

	return(
		<>
			{props.children}
		</>
	)
}

// Assets
function Box() {
	const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }))
	return(
		<mesh onClick={() => {
			api.velocity.set(0, 2, 0)
		}} ref={ref} position={[0, 2, 0]}>
			<boxGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="hotpink" />
		</mesh>
	)
}

function Plane() {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}))
	return(
		<mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
			<planeGeometry attach="geometry" args={[100, 100]} />
			{/* Color names are case insensitive */}
			<meshLambertMaterial attach="material" color="lightblue" />
		</mesh>
	)
}
