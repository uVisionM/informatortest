import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const app = document.getElementById('root');
        ReactDOM.render(
            <>
                <script src="js/jquery.min.js"></script>
                <script src="js/html2canvas.min.js"></script>
                <script src="js/three.min.js"></script>
                <script src="js/pdf.min.js"></script>
                <script src="js/3dflipbook.min.js"></script>
            </>,
            app,
        );
    });
    return (
        <div>
            <div id="root">COS</div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};
export default App;