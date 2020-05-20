import React from 'react'
// import {DataContext} from '../store'
import {DataContext} from '../storeReducer'
import Login from './Login'
import Count from './Count'
export default function(){
    const {selectedMenu} = React.useContext(DataContext)
    let Page = ()=>{
        if (selectedMenu.id === '1'){
            return <Login/>
        }
        if (selectedMenu.id === '2'){
            return <Count/>
        }
        return <div>welcome</div>
    }
    return (
        <div style={{
            width: '68%',
            right:0,
            height: '100%',
            position: 'absolute',
        }}>
            <Page/>
        </div>
    )
}