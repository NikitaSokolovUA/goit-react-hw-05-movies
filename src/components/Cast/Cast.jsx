import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { apiCast } from 'apiMovies';

const Cast = () => {
  const { state } = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const apiActors = async () => {
      try {
        const responce = await apiCast(state, controller);
        console.log(responce);
      } catch (error) {
        console.log(error);
      }
    };

    apiActors();

    return () => controller.abort();
  }, [state]);

  return <h3>ACTORS</h3>;
};

export default Cast;
