import { usePlane } from "@react-three/cannon"

export const Plane = () => {
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
