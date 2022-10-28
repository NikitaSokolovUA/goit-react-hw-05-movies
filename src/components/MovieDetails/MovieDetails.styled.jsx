import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContainerMovie = styled.div`
  display: flex;
  margin-top: 40px;
`;
export const DescriptionFilm = styled.div`
  padding: 20px;
`;

export const TitleFilm = styled.h2`
  text-transform: uppercase;
  font-family: Roboto;
  font-weight: 700;
  font-size: 30px;
`;

export const DescriptionTitle = styled.p`
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
`;

export const Description = styled.span`
  font-weight: 300;
`;

export const ListMoreInfo = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const ItemMoreInfo = styled(Link)`
  font-weight: 700;
  font-size: 30px;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #2196f3;
  }
`;

export const GoBack = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #2196f3;
  }
`;
