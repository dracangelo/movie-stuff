import React from "react";
import { useEffect } from "react";

// api key b4460f5d

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=b4460f5d'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman')

    }, []);

    return (
        <h1>newbie</h1>
    );
}

export default App;