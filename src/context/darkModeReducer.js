
export default function darkModeReducer(state, action) {
    switch (action.type) {
        case 'LIGHT': {
            return {
                darkMode: false,
            }
        }
        case 'Dark': {
            return {
                darkMode: true,
            }
        }
        case 'TOGGLE': {
            return {
                darkMode: !state.darkMode,
            }
        }
        default:
            return state
    }
}
