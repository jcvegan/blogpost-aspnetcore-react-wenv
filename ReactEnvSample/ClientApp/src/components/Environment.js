import React, { Component } from 'react';

export class Environment extends Component
{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <ul>
                    <li>Hello from <strong>{process.env.NODE_ENV}</strong></li>
                </ul>
            </div>
        )
    }
}