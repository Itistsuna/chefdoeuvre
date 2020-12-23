const initialState = {
    token: '',
    auth: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
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
        case 'AUTh_FALSE':
            return{
                ...state,
                auth:false
            }
        default:
            return state
    }
}

export default userReducer