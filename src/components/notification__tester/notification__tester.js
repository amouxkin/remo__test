import React from 'react';
import s from './_notification__tester.scss';
import Button from '../notification__button/notification__button';
import Notification from '../notificaiton/notification';
import PropTypes from 'prop-types';

export default class NotificationTester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.idGenerator = () => {
            this.setState((prev, prop)=>{ count: ++prev.count });
            return this.state.count;
        }

        this.userJoin = (icon, message)=> {
            this.props.adder( <Notification key={this.idGenerator()} icon={icon} message={message}/>);
        }
    }


    render() {
        return(
            <div className={s.container}>
                <div className={s.controller}>
                    <Button title={"New user join"} onClick={()=>this.userJoin('icon', "Luffy has joined the table.")} />
                    <Button title={"User leave"} />
                    <Button title={"Broadcast start"} />
                    <Button title={"Broadcast end"} />
                    <Button title={"User connection issue"} />
                    <Button title={"Other user connection issue"} />
                    <Button title={"User web-cam issue"} />
                    <Button title={"Other web-cam issue"} />
                </div>
            </div>
        );
    }
}

NotificationTester.propTypes = {
    adder: PropTypes.func
};