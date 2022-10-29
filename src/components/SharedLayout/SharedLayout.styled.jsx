import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  padding: 50px;
  background-color: #2196f3;
`;

export const HeaderLink = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.14;
  color: white;
  text-decoration: none;

  :not(:last-child) {
    margin-right: 50px;
  }

  :hover,
  :focus {
    color: #b00000;
  }
`;
