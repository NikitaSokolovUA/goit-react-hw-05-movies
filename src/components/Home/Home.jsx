import { apiTrendMovies } from 'apiMovies';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FilmTitle, TrendTitle } from './Home.style';

const Home = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const trendMovies = async () => {
      try {
        const trendMovies = await apiTrendMovies(controller.signal);
        setFilms(trendMovies.results);
      } catch (error) {
        console.log(error);
      }
    };

    trendMovies();

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
              <Link to={`/movies/${id}`}>
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
