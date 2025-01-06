import { createContext, useReducer } from 'react'

export const DivisionsContext = createContext()

export const divisionsReducer = (state, action) => {
    switch (action.type) {
        case "SET_DIVISIONS":
            return {
                divisions: action.payload
            }
        case "CREATE_DIVISION":
            return {
                divisions: [action.payload, ...action.divisions]
            }
        default:
            return state
    }
}


export const DivisionsContextProvider = ({ children }) => {
    const [ state, dispatch] = useReducer(divisionsReducer, {
        divisions: null
    })

    return (
        <DivisionsContext.Provider value={{state, dispatch}}> 
            { children }
        </DivisionsContext.Provider>
    )
}