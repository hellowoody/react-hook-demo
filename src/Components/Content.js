import React from 'react'
// import {DataContext} from '../store'
import {DataContext} from '../storeReducer'
import Login from './Login'
import Count from './Count'
import Resize from './Resize'
import HttpData from './HttpData'
export default function(){
    const {selectedMenu} = React.useContext(DataContext)
    let Page = ()=>{
        if (selectedMenu.id === '1'){
            return <Login/>
        }
        if (selectedMenu.id === '2'){
            return <Count/>
        }
        if (selectedMenu.id === '3'){
            return <Resize/>
        }
        if (selectedMenu.id === '4'){
            return <HttpData/>
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