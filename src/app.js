import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header/header';
import Controls from './components/controls/controls';
import s from './app.scss';
import 'normalize.css';

class App extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <Controls/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));