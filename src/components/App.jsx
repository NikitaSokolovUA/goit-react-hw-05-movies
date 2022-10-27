import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Reviews from './Reviews';
import { Container, Header, HeaderLink } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};
