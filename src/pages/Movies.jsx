import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchForm, MovieLink } from 'components';
import { fetchMoviesByName } from 'services/filmsApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search === '') {
      return;
    }
    setSearchParams({ search });

    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await fetchMoviesByName(search);

        setFilms(results);
      } catch (e) {
        setError(e.message);
      }
    };
    fetch();
  }, [search, setSearchParams]);

  return (
    <>
      <SearchForm onSearch={setSearch} />
      {error && <p>{error}</p>}
      {films.map(({ title, id }) => {
        return <MovieLink key={id} movieId={id} title={title} />;
      })}
    </>
  );
};

export default Movies;
