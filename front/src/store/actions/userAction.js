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

export const setInscription = () => ({
    type: "SET_INSCRIPTION"
})

export const inscriptionDone = () => ({
    type: "INSCRIPTION_DONE"
})