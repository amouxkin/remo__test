import React from 'react';
import PropTypes from 'prop-types';
import s from './_notification__area.scss';
import Notification from "../notificaiton/notification";

export default class NotificationArea extends React.Component{

    render() {
        return(
            <div className={s.container}>
                <div>
                    Notification area
                </div>
                {/*{ notificationBuilder(this.props.notifications)}*/}
                <Notification  />
            </div>
        );
    }
}

NotificationArea.propTypes = {
    notifications: PropTypes.object
}

// const notificationBuilder = (n) => n.keys.map((k) =>/>);