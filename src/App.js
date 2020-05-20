import React from 'react';
// import {ContextProvider} from './store'
import {ContextProvider} from './storeReducer'
import * as Com from './Components'
export default ()=>
  <ContextProvider>
    <Com.Menu />
    <Com.Content />
  </ContextProvider>
