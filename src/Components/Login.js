import React,{useContext} from 'react'
// import {DataContext} from '../store'
import {DataContext} from '../storeReducer'

export default function (){
    // const {user,setUser} = useContext(DataContext);
    const {user,dispatch} = useContext(DataContext);
    const loginInfo = {
        name : 'woody'
    }

    return (
        <React.Fragment>
            {/* <button onClick={()=>{setUser(loginInfo)}}>登陆</button> */}
            <button onClick={()=>{dispatch({type:'user',user:loginInfo})}}>登陆</button>
            <div>{user.name !== '' ? user.name+'已登陆' : '未登陆'}</div>
        </React.Fragment>
    )
}