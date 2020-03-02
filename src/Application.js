import React, {Component} from 'react';
import { blue } from 'color-name';

class Application extends Component {
    constructor(props){
        super (props);

        this.state = {
            count: 0
        }
    }

    increaseCount = () => {
        this.setState({count: this.state.count + 1});
    }
    
    resetFunction = () => {
        this.setState({count: 0});
    }

    decreaseCount = () => {
        this.setState({count: this.state.count - 1});
    }

    componentDidUpdate(props, state){
        console.log("Updated from ", state, " to ", this.state);
    }
    render () {
        let {count} = this.state;
        return (
            <div>
                <h1>You clicked the button {count} times</h1>
                <span>
                    <button onClick={(e) => this.increaseCount()}> Increase </button>
                    <button onClick={(e) => this.resetFunction()}> Reset </button>
                    <button onClick={(e) => this.decreaseCount()}> Decrease </button>
                </span>
            </div>
            
        );
    }
}

export default Application;