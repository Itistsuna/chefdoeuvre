const initialState = {
    products: null,
    product: null,
    productOwner: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'ADD_PRODUCTSOWNER':
        return {
            ...state,
            productOwner: action.products
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