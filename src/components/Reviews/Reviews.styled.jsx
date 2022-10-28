import styled from '@emotion/styled';

export const Review = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 30px;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const DateUpdate = styled.p`
  text-align: right;
  margin-right: 50px;
`;
