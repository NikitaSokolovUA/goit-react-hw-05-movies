import { apiReviews } from 'apiMovies';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DateUpdate, Review } from './Reviews.styled';

const Reviews = () => {
  const { state } = useLocation();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const getReviews = async () => {
      try {
        const responce = await apiReviews(state.id, controller);
        setReviews(responce.results);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();

    return () => controller.abort();
  }, [state]);

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
        <p>sorry no one review</p>
      )}
    </ul>
  );
};

export default Reviews;
