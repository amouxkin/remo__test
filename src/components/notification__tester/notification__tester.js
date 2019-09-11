import React from 'react';
import s from './_notification__tester.scss';
import Button from '../notification__button/notification__button';
// import Notification from '../notificaiton/notification';
import PropTypes from 'prop-types';
import icons from '../../images';

export default class NotificationTester extends React.Component {
    constructor(props) {
        super(props);

        this.createNotification = (icon, message)=> {
            this.props.adder(icon, message);
        }
    }

    userJoin(){
        let icon = 'user-join';
        let message = 'Luffy has joined the table.';
        this.createNotification(icon, message);
        createPushNotification('Luffy joined', icon, message);
    }

    userLeave(){
        let icon = 'user-leave';
        let message = 'Luffy has left the table.';
        this.createNotification(icon, message);
        createPushNotification('Luffy left', icon, message);
    }

    broadcastStart(){
        let icon = 'broadcast-start';
        let message = 'Luffy has started the broadcast.';
        this.createNotification(icon, message);
        createPushNotification('Luffy started the broadcast', icon, message);
    }

    broadcastEnd(){
        let icon = 'broadcast-end';
        let message = 'Luffy has ended the broadcast.';
        this.createNotification(icon, message);
        createPushNotification('Luffy ended the broadcast', icon, message);
    }

    userConnectionIssue(){
        let icon = 'connection-user';
        let message = 'You have a connection issue!';
        this.createNotification(icon, message);
        createPushNotification('Connection Issue', icon, message);
    }

    luffyConnectionIssue(){
        let icon = 'connection-other';
        let message = 'Luffy has a connection issue!';
        this.createNotification(icon, message);
        createPushNotification('Connection Issue', icon, message);
    }

    webcamIssue(){
        let icon = 'webcam-user';
        let message = 'You have a webcam problem!';
        this.createNotification(icon, message);
        createPushNotification('Webcam Issue', icon, message);
    }

    luffyWebcamIssue(){
        let icon = 'webcam-other';
        let message = 'Luffy has a webcam problem!';
        this.createNotification(icon, message);
        createPushNotification('Webcam Issue', icon, message);
    }

    render() {
        return(
            <div className={s.container}>
                <div className={s.controller}>
                    <Button title={"New user join"} onClick={this.userJoin.bind(this)} />
                    <Button title={"User leave"} onClick={this.userLeave.bind(this)}/>
                    <Button title={"Broadcast start"} onClick={this.broadcastStart.bind(this)} />
                    <Button title={"Broadcast end"} onClick={this.broadcastEnd.bind(this)} />
                    <Button title={"User connection issue"} onClick={this.userConnectionIssue.bind(this)} />
                    <Button title={"Other user connection issue"} onClick={this.luffyConnectionIssue.bind(this)} />
                    <Button title={"User web-cam issue"} onClick={this.webcamIssue.bind(this)} />
                    <Button title={"Other web-cam issue"} onClick={this.luffyWebcamIssue.bind(this)} />
                </div>
            </div>
        );
    }
}

NotificationTester.propTypes = {
    adder: PropTypes.func
};


function createPushNotification(title, icon, message) {
    if (Notification.permission === "granted") {
        new Notification(title, {
            body: message,
            icon: icon,
        });
    } else {
        alert('Push notification disabled, please enable it manually.')
    }
}