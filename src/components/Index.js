import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Header from './Header';
import Drag from './Drag';

const Index = () => (
    
    <div>
        <Header/>
        <h1>Welcome!</h1>
        
        <p>The intention of this app is to help with the understanding and recognition of algorithms and how they can be applied
        to both real life situations, and areas within your study at GCSE level. </p>

        <p>Below is an example of the kinds of interactions you can expect within this application!
        Take your time and try to arrange the steps in to the correct order.</p>

        <Link to='/basics'>Next</Link>
        <Drag />
        
    </div>
    
);

export default Index;