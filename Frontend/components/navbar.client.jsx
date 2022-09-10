import { useRouter } from "next/router"
import { useState } from "react";
import { useSpring, animated, config } from "react-spring"
import useMeasure from "react-use-measure"

import {
	GrAddCircle,
	GrSubtractCircle,
	GrRefresh,
} from "react-icons/gr"

export default function () {

	const router = useRouter()

	const handleRefresh = () => {
		router.reload(window.location.pathname)
	}

	const [isOpen, setIsOpen] = useState(false)

	const [measureRef, { height }] = useMeasure()

	const styles = useSpring({
		config: config.stiff,
		from: {
			height: 0
		},
		to: {
			height: isOpen ? height : 0
		}
	})

	return (
		<div className="navbar">
			<div style={{
				width: "100%",
				// display: 'flex',
				// justifyContent: 'center',
				alignItems: 'center'
			}}>
				<button className="block" onClick={() => setIsOpen((val) => !val)}>
					{isOpen ?
						<GrSubtractCircle size={20} className="toggle" /> :
						<GrAddCircle size={20} className="toggle" />}
				</button>
				<animated.div style={{ overflow: "hidden", ...styles }}>
					<div
					ref={measureRef}
					style={{
						// border: "1px solid black",
						padding: "12px"
					}}
					>
						{/* Refresh */}
						<button
							className="block"
							onClick={handleRefresh}>
							{/* Reminder: parentheses on handler functions will cause errors */}
							<GrRefresh size={20} className="spinner" />
						</button>
						{/* Register */}
						<button
							className="block"
							onClick={{}}>
								Register
						</button>
						{/* Login */}
						<button
							className="block"
							onClick={{}}>
								Login
						</button>
						{/* Profile */}
						<button
							className="block"
							onClick={{}}>
								Profile
						</button>
						{/* Logout */}
						<button
							className="block"
							onClick={{}}>
								Logout
						</button>
					</div>
				</animated.div>
			</div>
		</div>
	)
}
