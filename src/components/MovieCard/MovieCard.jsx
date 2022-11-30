import { Link } from 'react-router-dom';

function MovieCard({title, releaseDate, cast, posterPath}) {
    return (
        <>
            <strong>Title: </strong><Link to={title.replace(/\s/g,'-')}>{title}</Link>
            <br></br>
            <img src={posterPath}></img>
            <br></br>
            <strong>Release Date: </strong>{releaseDate}
            <br></br>

        </>
    );
  }
  
  export default MovieCard