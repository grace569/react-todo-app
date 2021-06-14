export const addItem = todo => ({
    type:'ADD_ITEM',
    payload: todo,
});

export const deleteTodo = key => ({
    type: "DELETE_ITEM",
    payload: key
});

