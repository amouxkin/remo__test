import React from 'react';
import Dom from 'react-dom';
import s from './_notification__button.scss';

export default class NotificationButton extends React.Component {

    render() {
        return (
            <div className={s.container} onClick={this.props.onClick} >
                <div className={s.title}>
                    {this.props.title}
                </div>
            </div>
        );
    }
}

