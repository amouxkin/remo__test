import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header/header';
import Controls from './components/controls/controls';
import NotificationTester from './components/notification__tester/notification__tester';
import NotificationArea from './components/notification__area/notification__area';


import s from './app.scss';
import 'normalize.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notifications: {
            }
        };

        function idGenerator() {
            // return Object.keys(this.state.notifications).length + math.;
            return Date.now().toString();
        }

        this.addNotification = function (icon, message) {
            this.setState((prevState, props) => {
                return {
                    notifications: {
                        ...(prevState.notifications),
                        [idGenerator()]: {
                            icon: icon,
                            message: message
                        }
                    }
                };})
        }

        this.removeNotification = function(id) {
            this.setState((prevState, props)=>{
                let newList = prevState.notifications;
                delete newList[id];
                return {
                    notifications: newList
                };
            });
        }
    }

    componentDidMount() {
        Notification.requestPermission(function(status) {
            if (Notification.permission === "denied") {
                alert("Notifications blocked. Please enable them in your browser manually.");
            }
            console.log("Permission granted");
        });
    }

    render() {
        return(
            <div className={s.home}>
                <Header/>
                <Controls/>
                <NotificationTester adder={this.addNotification.bind(this)}/>
                <NotificationArea notifications={this.state.notifications} deleteFunc={this.removeNotification.bind(this)}/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));