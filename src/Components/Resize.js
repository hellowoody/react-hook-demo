import React from 'react';
import {useResize} from './kits/useResize'

export default () => {
    const {width, height} = useResize();

    return <div>
        <p>width: {width}</p>
        <p>height: {height}</p>
    </div>;
};