import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { LinkItem, LinkStyled } from './MovieLink.styled';

export const MovieLink = ({ id, title }) => {
  const location = useLocation();

  return (
    <LinkItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </LinkStyled>
    </LinkItem>
  );
};

MovieLink.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
