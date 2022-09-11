/*	Zustand is a state management library based on
	the same Flux architecture pattern that Redux is,
	while having less boilerplate.
	Similar benefits to Redux when compared
	with React's built-in hooks,
	such as increased rendering performance,
	and enabling a functional global state store.
	It's also compatible with the Redux DevTools browser extension
	for purposes such as using time travel debugging with app state.
*/
import create from "zustand"
// import produce from "immer"
import { devtools, persist} from "zustand/middleware"

// export const useStore = create((set, get) => ({
// }))

// Use generic item store until specialization is needed
const store = (set) => ({
		login: false,
		registration: false,
		profile: false,
	toggleLogin: () => set((state) => ({ login: !state.login })),
	items: [],
	addItem: (item) => {
		set((state) => ({
			items: [item, ...state.items],
		}))
	},
	removeItem: (itemId) => {
		set((state) => ({
			items: state.items.filter((i) => i.id !== itemId)
		}))
	},
	toggleItemStatus: (itemId) => {
		set((state) => ({
			items: state.items.map((item) => {
				return (item.id === itemId ? {...item, completed: !item.completed} : item) // Don't forget the return statement when using curly braces (common oversight)
			})
		}))
	}
})
// const userStore = ...
// const recipeStore = ...

export const useStore = create(
	devtools( // Middleware to enable Redux DevTools support
		persist(store, {
			name: "items",
		})
	)
)
