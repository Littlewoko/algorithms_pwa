import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
    <div className="continer">
        <h1 className="header_title">Algorithms PWA!</h1>
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
        <p>
            <NavLink to="/basics/challenge" 
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
            > Challenge One </NavLink>  
            <NavLink to="/loops/challenge" 
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
            > Challenge Two </NavLink>  
            <NavLink to="/representation/challenge" 
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
            > Challenge Three </NavLink>  
        </p> 
        </div>
    </header>
);

export default Header;