export const addProducts = (product) => ({
    type: 'ADD_PRODUCTS',
    products: product
}) 

export const oneProduct = (product) => ({
    type: 'PRODUCT',
    product: product
})

export const addProductsOwner = (product) => ({
    type: 'ADD_PRODUCTSOWNER',
    products: product
}) 