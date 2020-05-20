import React from 'react'


const initState = {
    user:{
        name:""
    },
    selectedMenu:{}
}
const reducer = (state,action)=>{
    switch (action.type) {
        case 'user' : return {...state,user:action.user}
        case 'menu' : return {...state,selectedMenu:action.selectedMenu}
        default : return {...state}
    }
}

export const DataContext = React.createContext()

export const ContextProvider = function(props) {
    const [state,dispatch] = React.useReducer(reducer,initState)
    const {user,selectedMenu} = state
    return (
        <DataContext.Provider value={{user,selectedMenu,dispatch}}>
            {props.children}
        </DataContext.Provider>
    )
}


