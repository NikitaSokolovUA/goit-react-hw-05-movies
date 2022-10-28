import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const controller = new AbortController();

    try {
      const searchName = await apiByNameMovies(input, controller.signal);
      setSearchFilms(searchName.results);
    } catch (error) {
      console.log(error);
    }
    setInput('');
  };

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
          onChange={handleInputChange}
        />
      </SearchForm>

      {searchFilms && (
        <ul>
          {searchFilms.map(({ id, title }) => (
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

export default Movies;
