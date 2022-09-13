export default function () {
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
