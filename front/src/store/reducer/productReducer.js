const initialState = {
    products: [],
    product: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.products
            }    
        default:
            return state;
    }
}

export default productReducer