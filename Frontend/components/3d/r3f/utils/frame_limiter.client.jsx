import { useEffect } from "react"
import { useThree } from "@react-three/fiber"

// Currently doesn't seem to be working right according to Drei's <Stats> components
/* Example use case
export default function () {
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
*/
export const FrameLimiter = (props, {limit = 60}) => {
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
