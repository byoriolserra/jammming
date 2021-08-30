import React from 'react';
import './Track.css';

export class Track extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isRemoval: false
        };
        this.renderAction = this.renderAction.bind(this);
    }

    renderAction(){
        if (this.isRemoval){
            return <button className="Track-action">-</button>;
        } else {
            return <button className="Track-action">+</button>;
        }

    };

    render(){
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Name</h3>
                    <p>Artist | Album</p>
                </div>
                {this.renderAction()};
            </div>
        );
    }

};