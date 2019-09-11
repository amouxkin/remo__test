import React from 'react';
import PropTypes from 'prop-types';
import s from './_notification__area.scss';
import Notification from "../notificaiton/notification";

export default class NotificationArea extends React.Component{
    render() {
        return(
            <div className={s.container}>
                {
                    Object.keys(this.props.notifications).map((k)=>{
                        const values = this.props.notifications[k];
                        return <Notification removeFunc={()=>this.props.deleteFunc(k)} key={"notification_" + k} icon={values.icon} message={values.message}/>;
                    })
                }
            </div>
        );
    }
}

NotificationArea.propTypes = {
    notifications: PropTypes.object,
    deleteFunc: PropTypes.func
};