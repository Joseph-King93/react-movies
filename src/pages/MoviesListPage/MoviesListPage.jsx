import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import { movies } from "../../data.js";

function MoviesListPage ({name}) {
    return (
        <>
        <h1>MoviesListPage</h1>
       
        <br></br>
        {movies.map(movie => (
                <MovieCard
                key={movie.releaseDate}
                title={movie.title} 
                releaseDate={movie.releaseDate} 
                cast={movie.cast.map(cast => cast.actor)}
                posterPath={movie.posterPath}
                />
            ))
        }
        </>
    )
}

export default MoviesListPage;