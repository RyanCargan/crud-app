import { useRouter } from "next/router"
import { useState, useCallback, useContext } from "react"
import { AppContext } from "../context/state"
import produce from "immer"
import { useSpring, animated, config } from "react-spring"
// import { useStore } from "../hooks/useStore"
import useMeasure from "react-use-measure"
import { Logout } from "../utils/barrel"

import {
	GrAddCircle,
	GrSubtractCircle,
	GrRefresh,
} from "react-icons/gr"

export const Navbar = () => {

	const context = useContext(AppContext)

	const toggleState = useCallback((id) => {
		context.setSession(
			produce((draft) => {
				const item = draft.find((item) => item.id === id)
				item.state = !item.state
			})
		)
	}, [])

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
						{/* Login */}
						<button
							className="block"
							onClick={() => {
								toggleState("loginVisibility")
							}}>
								Login
						</button>
						{/* Register */}
						<button
							className="block"
							onClick={() => {
								toggleState("registerVisibility")
							}}>
								Register
						</button>
						{/* Profile */}
						<button
							className="block"
							onClick={() => {
								toggleState("profileVisibility")
							}}>
								Profile
						</button>
						{/* Dashboard */}
						<button
							className="block"
							onClick={() => {
								toggleState("dashboardVisibility")
							}}>
								Toggle<br />Dashboard
						</button>
						<Logout className="block" />
					</div>
				</animated.div>
			</div>
		</div>
	)
}
