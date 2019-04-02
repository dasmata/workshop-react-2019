import React, { Component, Fragment } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class DeleteElement extends Component {

    showConfirm = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.props.onDelete()
                },
                {
                    label: 'No',
                    onClick: () => null,
                },
            ],
        });
    };

    render () {
        return (
            <a href={'javascript://'} onClick={this.showConfirm}>delete</a>
        );
    }
}