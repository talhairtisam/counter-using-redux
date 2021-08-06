import React from 'react';
import './App.css';

import CountDisplay from './component/CountDisplay';
import Decrement from './component/Decrement';
import Increment from './component/Increment';

const App = () => {
    return (
        <div className='App'>
            <h1>Counter using Redux</h1>
            <div style={{border:'1px solid black', padding: ' 20px',textAlign:'center'}}>
                <Increment />
                <CountDisplay />
                <Decrement />  
            </div>
            
        </div>
    );
}

export default App;