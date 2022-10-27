import { apiById } from 'apiMovies';
import { useEffect, useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';

const DEFAULT_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    const controller = new AbortController();

    const fetchId = async () => {
      try {
        const responce = await apiById(movieId, controller);
        setFilm(responce);
        setImageUrl(`${DEFAULT_URL}${responce.poster_path}`);
      } catch (error) {
        console.log(error);
      }
    };

    fetchId();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {film && (
        <>
          <div>
            <img src={imageUrl} alt={film.title} />
            <div>
              <h2>{film.title}</h2>
              <p>release: {film.release_date}</p>
              <p>avarage vote: {film.vote_average}</p>
              <p>{film.overview}</p>

              <p>Ganres: {film.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <ul>
            <li>
              <Link to="cast" state={movieId}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
