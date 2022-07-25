import PropTypes from 'prop-types';
import {
  ContentBox,
  MovieContent,
  MovieItem,
  MovieLabel,
  AdditionalContent,
  AdditionalLink,
} from './MovieCard.styled';

export const MovieCard = ({
  film: { poster_path, release_date, vote_average, genres, title, overview },
  movieId,
}) => {
  const filmPoster = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : 'https://eiflixnob.live/assets/general/images/no_poster.jpg';

  const releaseDate = release_date.slice(0, 4);
  const userScore = vote_average.toFixed(1) * 10;
  const genresList = genres.map(e => e.name).join(', ');

  return (
    <>
      <MovieContent>
        <img src={filmPoster} alt={title} width={300} height={450} />
        <ContentBox>
          <MovieItem>
            <h1>
              {title} ({releaseDate})
            </h1>
            <p>User Score: {userScore}%</p>
          </MovieItem>
          <MovieItem>
            <MovieLabel>Overview</MovieLabel>
            <p>{overview}</p>
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
  film: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
  movieId: PropTypes.string.isRequired,
};
