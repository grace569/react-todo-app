const initState = {
    items: []
}

export const addItem = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, items: state.items.concat(action.payload)};
        case "DELETE_ITEM":
            const filteredItems = state.items.filter((item, i) => i !== action.payload);
            return {
                ...state,
                items: filteredItems
            };
        default:
            return state;
    }
}
