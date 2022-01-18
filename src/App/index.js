import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Enter from './Enter';
import Main from './Main';

function App(props) {
    return (
        <div className='app'>
            <Switch>
                <Route exact path='/' component={Enter} />
                <Route path='/main' component={Main} />
            </Switch>
        </div>
    )
}

export default App;