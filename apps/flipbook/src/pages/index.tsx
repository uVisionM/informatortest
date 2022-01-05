<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
const App = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        ReactDOM.render(<div>{count}</div>, $('#root')[0]);
    });
=======
import { getFlipBook } from '@/ssg/flipbookcontent';
import { LParser } from '@/ssg/parser';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { FlipBook } from '../components/organism/flipbook';
import { Header }  from '../components/atoms/header'
import { Footer } from '../components/atoms/footer'
import { Socialmedia } from '../components/atoms/socialmedia';
import { Graduate } from '@/ssg/graduate';
import { getScienceContent } from '@/ssg/science';
import { HParser } from '../components/organism/parser';
>>>>>>> Stashed changes

    return (
        <div>
            <div id="root">
                
            </div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};
export default App;