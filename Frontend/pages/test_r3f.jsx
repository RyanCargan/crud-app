import { useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"

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
			<Box />
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
	return(
		<mesh>
			<boxGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="hotpink" />
		</mesh>
	)
}
