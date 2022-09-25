import { useEffect } from "react"

export const Dashboard = () => {

	// Placeholder for array fetched with Mongoose
	const array = [
		{id: 1, name: "First", ingredients: ["Bun","Patty"]},
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
		{id: 3, name: "Last", ingredients: ["Egg", "Butter"]},
	]
	const listItems = array.map((object, i) => {
		return (
			<div className="column" key={i} id={i}>
				<div className="row" key={i} id={i}>
					Name: {object.name} <br />
					Ingredients: {object.ingredients.map((ingredient, i) => {
						return (
							<div className="row_inner" key={i} id={i}>
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
	<h2>Recipe Dashboard</h2>
	<div className="columns">
		{/* <div className={styles.column}> */}
		{listItems}
		{/* </div> */}
	</div>
	</>
	)
}
