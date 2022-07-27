import PropTypes from 'prop-types';
import { useLocation, generatePath } from 'react-router-dom';
import { routesPath } from 'routerSettings/settings';
import { LinkItem, LinkStyled } from './MovieLink.styled';

export const MovieLink = ({ movieId, title }) => {
  const location = useLocation();
  const movieLink = generatePath(routesPath.movieId, { movieId });

  return (
    <LinkItem key={movieId}>
      <LinkStyled to={movieLink} state={{ from: location }}>
        {title}
      </LinkStyled>
    </LinkItem>
  );
};

MovieLink.propTypes = {
  title: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};
