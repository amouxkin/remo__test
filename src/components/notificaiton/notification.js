import React from 'react';
import PropTypes from 'prop-types';
import s from './notification.scss';
import icons from '../../images';

export default class Notification extends React.Component{
    constructor(prop){
        super(prop);

        this.remove = () => {
            setTimeout(this.props.removeFunc, 5000);
        };
    }
    render() {
        return(
            <div className={s.container} onLoad={this.remove}>
                <div className={s.icon}>
                    <img src={icons[this.props.icon]}/>
                </div>
                <div className={s.message}>
                    <p>
                        {this.props.message}
                    </p>
                </div>
            </div>
        );
    }
}

Notification.propTypes = {
    icon: PropTypes.string,
    message: PropTypes.string,
    removeFunc: PropTypes.func
};