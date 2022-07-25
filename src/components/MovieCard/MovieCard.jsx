import PropTypes from 'prop-types';
import {
  ContentBox,
  MovieContent,
  MovieItem,
  MovieLabel,
  AdditionalContent,
  AdditionalLink,
} from './MovieCard.styled';

export const MovieCard = ({ film, movieId }) => {
  const filmPoster = film?.poster_path
    ? `https://image.tmdb.org/t/p/original${film.poster_path}`
    : 'https://eiflixnob.live/assets/general/images/no_poster.jpg';

  const releaseDate = film?.release_date.slice(0, 4);
  const userScore = film?.vote_average.toFixed(1) * 10;
  const genresList = film?.genres.map(e => e.name).join(', ');

  return (
    <>
      <MovieContent>
        <img src={filmPoster} alt={film?.title} width={300} height={450} />
        <ContentBox>
          <MovieItem>
            <h1>
              {film?.title} ({releaseDate})
            </h1>
            <p>User Score: {userScore}%</p>
          </MovieItem>
          <MovieItem>
            <MovieLabel>Overview</MovieLabel>
            <p>{film?.overview}</p>
          </MovieItem>
          <MovieItem>
            <MovieLabel>Genres</MovieLabel>
            <p>{genresList}</p>
          </MovieItem>
        </ContentBox>
      </MovieContent>
      <AdditionalContent>
        <p>Additional information</p>
        <ul>
          <li>
            <AdditionalLink to={`/movies/${movieId}/cast`}>
              - Cast -
            </AdditionalLink>
          </li>
          <li>
            <AdditionalLink to={`/movies/${movieId}/reviews`}>
              - Reviews -
            </AdditionalLink>
          </li>
        </ul>
      </AdditionalContent>
    </>
  );
};

MovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  movieId: PropTypes.string.isRequired,
};
