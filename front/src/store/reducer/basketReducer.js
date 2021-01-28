const initialState = {
    productBasket: [],
    total: 0,
  };

let item = {}

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      item =  state.productBasket.find(element => element.id_produit === action.productBasket.id_produit)
      if (item === undefined){
        action.productBasket.quantity = 1
        return {
            total: state.total + (action.productBasket.promotionIsActive ? action.productBasket.promotion : action.productBasket.prix_ttc),
            productBasket: [...state.productBasket, action.productBasket],
          };
        }else{
          item.quantity += 1
          return {
            ...state,
            total: state.total + (action.productBasket.promotionIsActive ? action.productBasket.promotion : action.productBasket.prix_ttc),
            productBasket: [...state.productBasket]
          }
        }
      case "DELETE_PRODUCT_FROM_CART":
        return {
          total: state.total - ((action.productBasket.promotionIsActive ? action.productBasket.promotion : action.productBasket.prix_ttc) * action.productBasket.quantity),
          productBasket: state.productBasket.filter(
            (product) => product !== action.productBasket
          ),
        };
      case "RESET_CART":
          return {
            ...state,
            productBasket : [],
            total: 0,
          };
      case "INCREASE_COUNTER":
      item = state.productBasket.find(element => element.id_produit === action.productBasket.id_produit)
          item.quantity += 1
          return {
            total: state.total + (action.productBasket.promotionIsActive ? action.productBasket.promotion : action.productBasket.prix_ttc),
            productBasket: [...state.productBasket]
          }
      case "DECREASE_COUNTER":
      item = state.productBasket.find(element => element.id_produit === action.productBasket.id_produit)
          if(item.quantity === 1){
            return {
              total: state.total - ( (action.productBasket.promotionIsActive ? action.productBasket.promotion : action.productBasket.prix_ttc) * action.productBasket.quantity),
              productBasket: state.productBasket.filter(
                (product) => product !== action.productBasket
              ),
            };
          }else{
          item.quantity -= 1
          return {
            total: state.total - (action.productBasket.promotionIsActive ? action.productBasket.promotion : action.productBasket.prix_ttc),
            productBasket: [...state.productBasket]
          }}
      default:
        return state;
    }
  };
  
  export default basketReducer;