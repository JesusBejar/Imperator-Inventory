import { createContext, useReducer } from 'react'

const DivisionsContext = createContext()

const divisionsReducer = (state, action) => {
    switch (action.type) {
        
    }
}


const DivisionsContextProvider = ({ children }) => {
    const [ state, dispatch] = useReducer(divisionsReducer, {
        divisions: null
    })

    return (
        <DivisionsContext.Provider value={}> 
            { children }
        </DivisionsContext.Provider>
    )
}