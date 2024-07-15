/* eslint-disable no-fallthrough */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const initialState = {
    user: null,
    isAuthenticated: null
}
const FAKE_USER = {
    name: "Ahmed",
    email: "ahmedrefaat00ar@gmail.com",
    password: "Ahmed",
    avatar: "https://i.pravatar.cc/100?u=zz",
};

function reducer(state, action) {


    switch (action.type) {
        case 'login':
            console.log(action.payload.password)
            if (action.payload.email === FAKE_USER.email && action.payload.password === FAKE_USER.password) {
                return { ...state, isAuthenticated: true, user: action.payload }
            }
            else
                return { ...state, isAuthenticated: false }
        case 'logout':
            return {...initialState}
        default:
            throw new Error('unkown Error')
    }

}
const AuthContext = createContext()
function AuthProvider({ children }) {

    const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, dispatch }}>
            {children}
        </AuthContext.Provider>

    )
}

function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined)
        throw new Error("AuthContext was used outside AuthProvider");
    return context;
}

export { AuthProvider, useAuth };
