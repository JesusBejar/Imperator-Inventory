import { createContext, useReducer } from 'react'

export const DivisionsContext = createContext()

export const divisionsReducer = (state, action) => {
    switch (action.type) {

    }
}


export const DivisionsContextProvider = ({ children }) => {
    const [ state, dispatch] = useReducer(divisionsReducer, {
        divisions: null
    })

    return (
        <DivisionsContext.Provider value={}> 
            { children }
        </DivisionsContext.Provider>
    )
}