import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Algorithms PWA!</h1>
        <p>
            <NavLink to="/" 
                activeclassname='is-active' 
                exact="true" 
                style={({ isActive }) => 
                    isActive ? 
                    {
                        color: '#fff',
                        background: '#7600dc',
                    }
                    : {
                        color: '#545e6f',
                        background: '#f0f0f0',
                    }
                }   
            > Home  </NavLink> 
            <NavLink to="/basics" 
                activeclassname='is-active' 
                exact="true" 
                style={({ isActive }) => 
                    isActive ? 
                    {
                        color: '#fff',
                        background: '#7600dc',
                    }
                    : {
                        color: '#545e6f',
                        background: '#f0f0f0',
                    }
                }
            > Lesson One </NavLink>  
            <NavLink to="/loops" 
                activeclassname='is-active' 
                exact="true" 
                style={({ isActive }) => 
                    isActive ? 
                    {
                        color: '#fff',
                        background: '#7600dc',
                    }
                    : {
                        color: '#545e6f',
                        background: '#f0f0f0',
                    }
                }
            > Lesson Two </NavLink>  
            <NavLink to="/representation" 
                activeclassname='is-active' 
                exact="true" 
                style={({ isActive }) => 
                    isActive ? 
                    {
                        color: '#fff',
                        background: '#7600dc',
                    }
                    : {
                        color: '#545e6f',
                        background: '#f0f0f0',
                    }
                }
            > Lesson Three </NavLink>  
        </p> 
    </header>
);

export default Header;