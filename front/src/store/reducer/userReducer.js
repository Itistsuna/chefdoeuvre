const initialState = {
    token: '',
    auth: false,
    inscription: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_INSCRIPTION":
            return{
                ...state,
                inscription: true
            }
        case "INSCRIPTION_DONE":
            return{
                ...state,
                inscription: false
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        case 'DELETE_TOKEN':
            return{
                ...state,
                token: ""
            }
        case 'AUTH_TRUE':
            return{
                ...state,
                auth: true
            }
        case 'AUTH_FALSE':
            return{
                ...state,
                auth:false
            }
        default:
            return state
    }
}

export default userReducer