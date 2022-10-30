import { apiReviews } from 'apiMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DateUpdate, Review } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const getReviews = async () => {
      try {
        const responce = await apiReviews(movieId, controller);
        setReviews(responce.results);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content, updated_at }) => (
          <Review key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
            <DateUpdate>{updated_at}</DateUpdate>
          </Review>
        ))
      ) : (
        <Review>
          <p>Sorry no Reviews</p>
        </Review>
      )}
    </ul>
  );
};

export default Reviews;
