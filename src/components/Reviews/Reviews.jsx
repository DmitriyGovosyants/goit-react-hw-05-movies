import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/filmsApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await fetchMovieReviews(movieId);

        setReviews(results);
        setIsLoading(true);
      } catch (e) {
        setError(e.message);
      }
    };
    fetch();
  }, [movieId]);

  const noReviews = reviews.length === 0 && isLoading;

  return (
    <>
      {error && <p>{error}</p>}
      {noReviews && <p>We don`t have any reviews for this movie</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>
                  <b>Author: {author}</b>
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
