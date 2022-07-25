import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const LinkItem = styled.li`
  padding: ${p => p.theme.spacing(1)};
`

export const LinkStyled = styled(Link)`
  color: blue;

  :hover {
    color: red;
  }
`