import { apiTrendMovies } from 'apiMovies';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FilmTitle, TrendTitle } from './Home.style';
import PropTypes from 'prop-types';

const Home = () => {
  const [films, setFilms] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const trendMovies = async () => {
      try {
        const trendMovies = await apiTrendMovies(controller.signal);
        setFilms(trendMovies.results);
      } catch (error) {
        console.log(`упс ${error}`);
      }
    };

    trendMovies();
    localStorage.clear();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <TrendTitle>Trending today</TrendTitle>
      {films && (
        <ul>
          {films.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location.pathname }}>
                <FilmTitle>{title}</FilmTitle>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;

Home.propTypes = {
  path: PropTypes.string.isRequired,
};
