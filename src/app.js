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
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('com');
        // console.log(prevState.notifications);
    }

    addNotification (id, newNotification) {
        this.setState({
            notifications: {
                ...(this.state.notifications),
                id: newNotification}
        });
    }

    removeNotification(id) {

    }


    render() {
        return(
            <div className={s.home}>
                <Header/>
                <Controls/>
                <NotificationTester adder={this.addNotification.bind(this)}/>
                <NotificationArea notifications={this.state.notifications}/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));