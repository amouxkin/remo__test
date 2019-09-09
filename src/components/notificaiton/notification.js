import React from 'react';
import PropTypes from 'prop-types';
import s from './notification.scss';

export default class Notification extends React.Component{
    render() {
        return(
            <div>
                <span>
                    {this.props.icon}
                </span>
                <span>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

Notification.propType = {
    icon: PropTypes.func,
    message: PropTypes.text
};