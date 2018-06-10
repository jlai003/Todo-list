import React, {Component} from 'react';

class SingleTodo extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <li key={this.props.k}>{this.props.todo}<button onClick={this.props.delete}>x</button></li>
        )
    }
}
    // const SingleTodo = props => {
    //     return(
    //     <li key={props.k}>{props.todo}<button onClick={props.delete}>x</button></li>
    //     );
    // }

export default SingleTodo;
