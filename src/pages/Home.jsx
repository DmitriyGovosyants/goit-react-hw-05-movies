import { useState, useEffect } from 'react';
import { MovieLink } from 'components';
import { fetchTrending } from 'services/filmsApi';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await fetchTrending();

        setFilms(results);
      } catch (e) {
        setError(e.message);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && <p>{error}</p>}
      {films.map(({ title, id }) => {
        return <MovieLink key={id} movieId={id} title={title} />;
      })}
    </>
  );
};

export default Home;
