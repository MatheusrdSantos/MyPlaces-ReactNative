export const AUTH_ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

export const login = () =>{
    return {type: AUTH_ACTIONS.LOGIN, payload: true}
}
export const logout = () =>{
    return {type: AUTH_ACTIONS.LOGOUT, payload: false}
}

export const INITIAL_STATE = {
    auth: {
        logged: false,
        user:{
            /* name: "Matheus",
            last_name: "Santos",
            id: 10 */
        }
    },
    app: "app data"
}