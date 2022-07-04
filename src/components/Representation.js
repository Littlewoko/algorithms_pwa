import React from 'react';
import Header from './Header';
import Psuedocode from './Psuedocode';
import Flowcharts from './Flowcharts';
import Code from './Code';

const Representation = () => (
    
    <div>
        <Header />
        <div>
            <h1>Representation</h1>
            <p>
                Algorithms can be presented in multiple different, but equally correct, ways.
                The option you choose to represent your chosen algorithms will depend on your 
                use case, with the focus being on simplicity and ease of understanding. Regardless
                of the chosen presentation method another individual should be able to read your 
                algorithm and translate it to their chosen language/ representation.
            </p>
            <Psuedocode />
            <Flowcharts />
            <Code />
        </div>
    </div>
    
);

export default Representation;