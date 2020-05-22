import {useState,useEffect,useCallback} from 'react'

export const useResize = ()=>{
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });
    const resize = useCallback(() => {
        setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    }, [])
    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [resize]);
    return size;
}