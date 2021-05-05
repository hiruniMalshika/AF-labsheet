import React, {Component} from 'react';
import {BrowserRouter  as Router, Route, Switch, Redirect} from 'react-router-dom';
import PostHolder from "./components/PostHolder";
export default class App extends Component {


    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route  path='/posts'>
                        <PostHolder/>
                    </Route>
                    <Redirect to='/posts'/>
                </Switch>

            </Router>

            );


    }
}