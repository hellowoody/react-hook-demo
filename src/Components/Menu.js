import React,{useContext} from 'react';
// import {DataContext} from '../store'
import {DataContext} from '../storeReducer'

export default function(){
    // const {selectedMenu,setSelectedMenu,user} = useContext(DataContext)
    const {user,selectedMenu,dispatch} = useContext(DataContext)
    // console.log(user,selectedMenu)
    const menus = [
        {
            id:'1',
            name:'Login',
            url:'#login'
        },
        {
            id:'2',
            name:'计数器',
            url:'#count'
        },
        {
            id:'3',
            name:'自适应屏幕',
            url:'#resize'
        },
        {
            id:'4',
            name:'数据请求',
            url:'#http'
        },
        {
            id:'99',
            name:'Logout',
            url:'#logout'
        },
    ]

    return (
        <div style={{
            width: '30%',
            height: '100%',
            position: 'absolute',
            borderRightStyle: 'groove'
        }}>
            <div>菜单 {user.name!=='' ? user.name+"已登陆" : ''}</div>
            <ul>
                {
                    menus.map((item,i)=>(
                        <li key={item.id} style={selectedMenu.id === item.id ? {fontSize:20,color:'#333'} : {fontSize:16,color:'#333'}} >
                            {/* <a href={item.url} onClick={()=>{setSelectedMenu(item)}}>{item.name}</a> */}
                            <a href={item.url} onClick={()=>{dispatch({type:'menu',selectedMenu:item})}}>{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}