import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stats, Stars } from "@react-three/drei"
import { Physics } from "@react-three/cannon"

import {
	// Assets
		// Terrain Geometry
		Box, Plane,
		// Character Models
	// Scenes
	// Utils
	// FrameLimiter,
} from "../../utils/barrel"

// Main function ("engine" component)
export default function () {
	return(
		<div className="scene">
			<Canvas>
				{/* <FrameLimiter> */}
				<Scene />
				{/* </FrameLimiter> */}
			</Canvas>
		</div>
	)
}

// Utils
function Scene() {
	return(
		<>
			<OrbitControls />
			<Stats />
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
