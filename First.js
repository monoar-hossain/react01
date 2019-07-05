import React, { Component } from 'react'

class First extends Component {
    render() {
        return(
            <div>
                <h3>Name: { this.props.name } </h3>
                <p>Email: { this.props.email } </p>
                <p>Address: { this.props.address } </p>
            </div>
        );
    }
}
export default First;