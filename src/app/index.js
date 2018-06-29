import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import Home from "./components/Home";
class App extends React.Component {
    render() {
        return (
            <Router history={createBrowserHistory({queryKey: false})}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;