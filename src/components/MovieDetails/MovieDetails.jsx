import { apiById } from 'apiMovies';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import {
  ContainerMovie,
  DescriptionTitle,
  DescriptionFilm,
  Description,
  TitleFilm,
  ListMoreInfo,
  ItemMoreInfo,
  GoBack,
} from './MovieDetails.styled';

const DEFAULT_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const controller = new AbortController();

    const fetchId = async () => {
      try {
        const responce = await apiById(movieId, controller);
        setFilm(responce);
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
      <GoBack to={backLinkHref}>Go Back</GoBack>
      {film && (
        <>
          <ContainerMovie>
            <img src={`${DEFAULT_URL}${film.poster_path}`} alt={film.title} />
            <DescriptionFilm>
              <TitleFilm>{film.title}</TitleFilm>
              <DescriptionTitle>
                release: <Description>{film.release_date}</Description>
              </DescriptionTitle>
              <DescriptionTitle>
                avarage vote: <Description>{film.vote_average}</Description>
              </DescriptionTitle>
              <Description>{film.overview}</Description>
              <DescriptionTitle>
                Ganres:{' '}
                <Description>
                  {film.genres.map(genre => genre.name).join(', ')}Title
                </Description>
              </DescriptionTitle>
            </DescriptionFilm>
          </ContainerMovie>
          <ListMoreInfo>
            <li>
              <ItemMoreInfo to="cast" state={{ id: movieId }}>
                Cast
              </ItemMoreInfo>
            </li>
            <li>
              <ItemMoreInfo to="reviews" state={{ id: movieId }}>
                Reviews
              </ItemMoreInfo>
            </li>
          </ListMoreInfo>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
