const initialState = {
    products: null,
    product: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'PRODUCT':
            return {
                ...state,
                product: action.product
            }    
        default:
            return state;
    }
}

export default productReducer