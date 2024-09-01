import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PropTypes from 'prop-types';
import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage} from '../pages'

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/marvel-hooks">
                            <MainPage/>
                        </Route>
                        <Route exact path="/marvel-hooks/comics">
                            <ComicsPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

App.propTypes = {
    onCharSelected: PropTypes.func
}

export default App;
