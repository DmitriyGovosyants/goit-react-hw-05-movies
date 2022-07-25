import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'services/filmsApi';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { cast },
        } = await fetchMovieCredits(movieId);
        setCredits(cast);
      } catch (e) {
        setError(e.message);
      }
    };
    fetch();
  }, [movieId]);

  const getProfileImg = img => {
    return img
      ? `https://image.tmdb.org/t/p/original${img}`
      : 'https://eiflixnob.live/assets/general/images/no_poster.jpg';
  };

  return (
    <>
      {error && <p>{error}</p>}
      {credits && (
        <ul>
          {credits.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={getProfileImg(profile_path)}
                  alt={name}
                  width={150}
                  height={300}
                  loading="lazy"
                />
                <p>--- {name} ---</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
