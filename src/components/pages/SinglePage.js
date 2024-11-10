import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';
import AppBanner from "../appBanner/AppBanner";
// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMessage/ErrorMessage';

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {
        // loading,
        // error,
        getComic,
        getCharacter,
        clearError,
        process,
        setProcess} = useMarvelService();

    // Используем useCallback, чтобы избежать повторного создания функции
    const updateData = useCallback(() => {
        clearError();
    
        switch (dataType) {
            case 'comic':
                getComic(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
                break;
            case 'character':
                getCharacter(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
                break;
            default:
                console.warn('Unknown data type');
        }
    }, [id, dataType, clearError, getComic, getCharacter, setProcess]); // Добавлено setProcess
    

    useEffect(() => {
        updateData();
    }, [updateData]); // Теперь зависимость корректна

    const onDataLoaded = (data) => {
        setData(data);
    }

    // const errorMessage = error ? <ErrorMessage/> : null;
    // const spinner = loading ? <Spinner/> : null;
    // const content = !(loading || error || !data) ? <Component data={data}/> : null;

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
            {/* {errorMessage}
            {spinner}
            {content} */}
        </>
    );
}

export default SinglePage;
