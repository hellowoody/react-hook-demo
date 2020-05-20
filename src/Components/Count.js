import React, { useEffect } from 'react';

export default function (){
  const [count,setCount] = React.useState(0)
  const latestCount = React.useRef(count)

  function handleClick(){
    setTimeout(()=>{
      alert('you clicked count : '+latestCount.current)
    },3000)
  }

  return (
    <React.Fragment>
      <div>计数器:{count}</div>
      <button onClick={()=>{
        latestCount.current = count+1;
        setCount(count+1)}
        }>累加</button>
      <br/>
      <button onClick={handleClick}>捕获</button>
    </React.Fragment>
  )
}
  
