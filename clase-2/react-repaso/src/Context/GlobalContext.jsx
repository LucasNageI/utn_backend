import React, { createContext } from 'react'

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    return (
        <GlobalContext.Provider>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider