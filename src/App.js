import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Switch, useLocation } from 'react-router-dom';
import NewAd from './pages/NewAd';

function App() {
    const location = useLocation();

    return (
        <div className='App'>
            <Switch location={location} key={location.pathname}>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/new_ad' exact>
                    <NewAd />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
