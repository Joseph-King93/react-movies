import React from 'react'
import { useParams } from 'react-router-dom';
import { movies } from "../../data.js";

function MovieDetailPage () {
    let {movieName} = useParams();
    movieName = movieName.replaceAll('-', " ")

    movies.forEach(m => (
        console.log(m.title == movieName
        )))
    
    const index = movies.findIndex(({ title }) => title == movieName)
    console.log(index)

    return (
        <>
        <h1>{movieName}</h1>
        <strong>Release Date: </strong>{movies[index].releaseDate}
        <br></br>
        <img src={movies[index].posterPath}></img>
        <br></br>
        <strong>Cast: </strong>{movies[index].cast.join(', ')}

        </>
    )
}

export default MovieDetailPage;