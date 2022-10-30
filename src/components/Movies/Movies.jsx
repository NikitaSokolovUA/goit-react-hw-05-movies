import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  Icon,
} from './Movies.styled';
import { apiByNameMovies } from 'apiMovies';
import { FilmTitle } from 'components/Home/Home.style';

const Movies = () => {
  const [input, setInput] = useState('');
  const [searchFilms, setSearchFilms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const inputName = searchParams.get('name') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ name: input });
  };

  useEffect(() => {
    if (inputName === '') {
      return;
    }

    const controller = new AbortController();

    const getSearchApi = async () => {
      try {
        const searchName = await apiByNameMovies(inputName, controller.signal);
        setSearchFilms(searchName.results);
      } catch (error) {
        console.log(error);
      }
    };

    getSearchApi();

    return () => controller.abort();
  }, [inputName]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton>
          <Icon />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="inputValue"
          autocomplete="off"
          autoFocus
          placeholder="Search films"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </SearchForm>

      {searchFilms && (
        <ul>
          {searchFilms.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: `${location.pathname}${location.search}` }}
              >
                <FilmTitle>{title}</FilmTitle>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
