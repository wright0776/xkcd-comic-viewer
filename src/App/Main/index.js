import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Comic from './Comic';
import Favorites from './FavoritesList';

function Main() {
    return (
        <div className='main'>
            <Header/>
            <Switch>
                <Route exact path='/main' component={Comic} />
                <Route path='/main/random' component={Comic} />
                <Route path='/main/favorites' component={Favorites} />
            </Switch>
            <Footer/>
        </div>
    )
}

export default Main;
