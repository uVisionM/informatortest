import React from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component {
    handleGoogleClientLoad() {
        console.log('Success on load');
    }

    render() {
        return (
            <div>
                <button>Click Me</button>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<MyApp />, app);
