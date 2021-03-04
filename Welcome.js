import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

class Welcome extends React.Component
    {
        render()
            {
                return <div>
                            <Hello/>
                            <h1>Welcome from class component</h1>  
                        </div>
            }
    }

ReactDOM.render(<Welcome/>,document.getElementById("div01"));