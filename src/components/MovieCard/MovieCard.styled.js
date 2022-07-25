import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

export const MovieContent = styled.div`
  display: flex;
  padding-top: ${p => p.theme.spacing(5)};
`

export const ContentBox = styled.ul`
  margin-left: ${p => p.theme.spacing(5)};
`

export const MovieItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(5)};
  }
`

export const MovieLabel = styled.p`
  font-size: 26px;
`

export const AdditionalContent = styled.div`
  padding: ${p => p.theme.spacing(3)};
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`

export const AdditionalLink = styled(Link)`
  display: inline-block;
  padding: ${p => p.theme.spacing(1)};

  font-size: 22px;
  color: blue;

  :hover {
    color: red;
  }
`