import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchForm, MovieLink } from 'components';
import { fetchMoviesByName } from 'services/filmsApi';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      setSearch(query);
    }
  }, [query]);

  useEffect(() => {
    if (search === '') {
      return;
    }

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
  }, [search]);

  const onSearch = value => {
    setSearch(value);
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchForm onSearch={onSearch} />
      {error && <p>{error}</p>}
      {films.map(({ title, id }) => {
        return <MovieLink key={id} id={id} title={title} />;
      })}
    </>
  );
};

export default Movies;
