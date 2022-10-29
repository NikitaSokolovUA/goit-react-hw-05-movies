import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiCast } from 'apiMovies';
import {
  ActorImage,
  ActorsList,
  ActorTitle,
  CastTitle,
  Character,
} from './Cast.styled';
import PropTypes from 'prop-types';

const DEFAULT_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const apiActors = async () => {
      try {
        const responce = await apiCast(movieId, controller);
        setActors(responce.cast);
      } catch (error) {
        console.log(error);
      }
    };

    apiActors();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      <CastTitle>ACTORS</CastTitle>
      {actors && (
        <ActorsList>
          {actors.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                {profile_path ? (
                  <ActorImage
                    src={`${DEFAULT_URL}${profile_path}`}
                    alt={original_name}
                  />
                ) : (
                  <ActorImage
                    src="https://via.placeholder.com/250x200"
                    alt=""
                  />
                )}
                <ActorTitle>{original_name}</ActorTitle>
                <Character>{character}</Character>
              </li>
            );
          })}
        </ActorsList>
      )}
    </>
  );
};

export default Cast;

Cast.propTypes = {
  path: PropTypes.string.isRequired,
};
