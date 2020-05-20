import React from 'react';

export const DataContext = React.createContext();

export const ContextProvider = function(props){

    const [user,setUser] = React.useState({
        name:''
    })
    const [selectedMenu,setSelectedMenu] = React.useState({})

    return (
        <DataContext.Provider value={{user,setUser,selectedMenu,setSelectedMenu}}>
            {props.children}
        </DataContext.Provider>
    )
}
