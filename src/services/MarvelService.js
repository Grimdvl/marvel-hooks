import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=9f935f1f412d521ee53ee05920a38689';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const _transformCharacter = (char) => {
        let descr = char.description.length > 100 ? char.description.substring(0, 100) + '...' : char.description;

        return {
            id: char.id,
            name: char.name,
            description: descr === '' ? descr = "There's no information about this character." : descr,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComics = (comics) => {
        let descr = comics.description.length > 100 ? comics.description.substring(0, 100) + '...' : comics.description;

        return {
            id: comics.id,
            title: comics.title,
            description: descr === '' ? descr = "There's no information about this comics." : descr,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            prices: comics.prices[0].price
        }
    }

    return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics}
}

export default useMarvelService;