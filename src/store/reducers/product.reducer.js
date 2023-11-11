export function productReducer(state = {
    data: [
        {
            id: 1,
            name: "sp1"
        }
    ]
}, action) {
    switch (action.type) {
        case "ADD_PRODUCT": 
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state;
    }
 }