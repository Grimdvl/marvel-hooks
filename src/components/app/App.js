import { useState } from "react";
import PropTypes from 'prop-types';

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundery from "../errorBoundary/ErrorBoundery";

import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar, setChar] = useState(null);


    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundery>
                    <RandomChar/>
                </ErrorBoundery>
                <div className="char__content">
                    <ErrorBoundery>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBoundery>
                    <ErrorBoundery>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundery>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

App.propTypes = {
    onCharSelected: PropTypes.func
}

export default App;