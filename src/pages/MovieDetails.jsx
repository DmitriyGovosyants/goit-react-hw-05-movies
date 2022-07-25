import { Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { fetchMovieDetails } from 'services/filmsApi';
import { MovieCard } from 'components';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = prevUrl ?? '/';

  useEffect(() => {
    if (location.state) {
      const pathname = location.state.from.pathname;
      const search = location.state.from.search;
      setPrevUrl(pathname + search);
    }
  }, [location]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await fetchMovieDetails(movieId);

        setFilm(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>
        <IoArrowBackOutline />
        Go back
      </Link>
      {error && <p>{error}</p>}
      {film && (
        <>
          <MovieCard film={film} movieId={movieId} />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
