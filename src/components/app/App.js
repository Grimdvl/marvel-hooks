import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PropTypes from 'prop-types';
import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage, Page404} from '../pages'

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/marvel-hooks" element={<MainPage/>}/>
                        <Route path="/marvel-hooks/comics" element={<ComicsPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

App.propTypes = {
    onCharSelected: PropTypes.func
}

export default App;
