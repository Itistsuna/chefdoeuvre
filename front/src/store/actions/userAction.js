export const setToken = (token) => ({
    type: 'SET_TOKEN',
    token: token
})

export const deleteToken = () => ({
    type: 'DELETE_TOKEN'
})

export const authTrue = () => ({
    type: 'AUTH_TRUE',
    auth: true
})

export const authFalse = () => ({
    type: 'AUTH_FALSE',
    auth: false
})