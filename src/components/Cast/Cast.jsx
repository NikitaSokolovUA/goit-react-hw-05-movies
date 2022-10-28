import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apiCast } from 'apiMovies';
import {
  ActorImage,
  ActorsList,
  ActorTitle,
  CastTitle,
  Character,
} from './Cast.styled';

const DEFAULT_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { state } = useLocation();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const apiActors = async () => {
      try {
        const responce = await apiCast(state.id, controller);
        setActors(responce.cast);
      } catch (error) {
        console.log(error);
      }
    };

    apiActors();

    return () => controller.abort();
  }, [state]);

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
