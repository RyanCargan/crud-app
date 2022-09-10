/*	Zustand is a state management library based on
	the same Flux architecture pattern that Redux is,
	while having less boilerplate.
	Similar benefits to Redux when compared
	with React's built-in useState hook,
	such as increased rendering performance,
	and enabling a functional global state store.
	It's also compatible with the Redux DevTools browser extension
	for purposes such as using time travel debugging with app state.
*/
import create from "zustand"

const useStore = create((set, get) => ({
}))

export default useStore
