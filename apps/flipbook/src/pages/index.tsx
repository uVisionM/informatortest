
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
const App = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        ReactDOM.render(<div>{count}</div>, $('#root')[0]);
    });


    return (
        <div>
            <div id="root">
                
            </div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};
export default App;
