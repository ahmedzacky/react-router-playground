import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import App from '../App'
import Recipe from './Recipe'

//applying random key to home page to allow refreshing after loading search results
// NEVER FORGET TO ADD EXACTTTTT to home route !!!!!

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </BrowserRouter>

)

export default Router