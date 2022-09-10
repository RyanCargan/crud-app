import { useState, Fragment } from "react"
import { useStore } from "../hooks/useStore"

export default function () {
	// Batch 1
	const addItem = useStore((state) => {
		return (state.addItem)
	}) // Be careful with curly braces causing errors here if the return is missing

	const [itemName, setItemName] = useState("")
	console.log("Item form rendered")

	const handleItemSubmit = () => {
		if (!itemName) {
			return alert("Please add an item name!")
		}

		addItem({
			id: Math.ceil(Math.random() * 1_000_000),
			name: itemName
		})

		setItemName("")
		console.log(itemName)
	}
	// Batch 2
	const {items, removeItem, toggleItemStatus} = useStore(
		(state) => ({
			items: state.items,
			removeItem: state.removeItem,
			toggleItemStatus: state.toggleItemStatus
		})
	)

	return (
		<>
			<h1>Item Form</h1>
			<div>
				<input
					value={itemName}
					onChange={(e) => {
						setItemName(e.target.value)
					}}
				/>
				<button onClick={() => {
					handleItemSubmit()
				}}>
					Add Item
				</button>
			</div>
			<h1>Item List</h1>
			<div>
				<ul>
					{items.map((item, i) => {
						return (
						<Fragment key={i}>
							<li
								// className={""}
								style={{
									backgroundColor: item.completed ? "#00FF0044" : "white"
								}}
							>
								<span>
									<input
										checked={item.completed}
										type="checkbox"
										onChange={(e) => {
											toggleItemStatus(item.id)
										}}
									/>
								</span>
								<span>{item?.name}</span>
								<button onClick={() =>{
									removeItem(item.id)
								}}>Delete</button>
							</li>
						</Fragment>
						)
					})}
				</ul>
			</div>
		</>
	)
}
