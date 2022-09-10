import styles from "../pages/index.module.scss"
import { useEffect } from "react"

export default function () {

	// const array = [1, 2, 3, 4, 5]
	const array = [
		{id: 1, name: "Burger", ingredients: ["Bun","Patty"]},
		{id: 2, name: "French Fries", ingredients: ["Potato", "Ketchup"]},
		{id: 3, name: "Omelette", ingredients: ["Egg", "Butter"]},
		{id: 1, name: "Burger", ingredients: ["Bun","Patty"]},
		{id: 2, name: "French Fries", ingredients: ["Potato", "Ketchup"]},
		{id: 3, name: "Omelette", ingredients: ["Egg", "Butter"]},
		{id: 1, name: "Burger", ingredients: ["Bun","Patty"]},
		{id: 2, name: "French Fries", ingredients: ["Potato", "Ketchup"]},
		{id: 3, name: "Omelette", ingredients: ["Egg", "Butter"]},
		{id: 1, name: "Burger", ingredients: ["Bun","Patty"]},
		{id: 2, name: "French Fries", ingredients: ["Potato", "Ketchup"]},
		{id: 3, name: "Omelette", ingredients: ["Egg", "Butter"]},
		{id: 1, name: "Burger", ingredients: ["Bun","Patty"]},
		{id: 2, name: "French Fries", ingredients: ["Potato", "Ketchup"]},
		{id: 3, name: "Omelette", ingredients: ["Egg", "Butter"]},
	]
	const listItems = array.map((object, i) => {
		return (
			<div className={styles.column} key={i} id={i}>
				<div className={styles.row} key={i} id={i}>
					Name: {object.name} <br />
					Ingredients: {object.ingredients.map((ingredient, i) => {
						return (
							<div className={styles.row_inner} key={i} id={i}>
								{ingredient},
							</div>
						)
					})}
					<br />
				</div>
			</div>
		)
	})

	// useEffect(() => {
	// 	console.log(array[0])
	// 	return () => {
	// 		cleanup
	// 	};
	// }, [listItems])

	return (
	<>
	<h1>Dashboard</h1>
	<div className={styles.columns}>
		{/* <div className={styles.column}> */}
		{listItems}
		{/* </div> */}
	</div>
	</>
	)
}
