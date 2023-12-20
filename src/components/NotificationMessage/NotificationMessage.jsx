import React, { Component } from "react";

export class NotificationMessage extends Component {

    render() {
        return <h4 title={this.props.title}>{this.props.title}</h4>
    }
}