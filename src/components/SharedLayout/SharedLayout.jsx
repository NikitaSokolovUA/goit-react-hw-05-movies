import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, HeaderLink } from './SharedLayout.styled';
import PropTypes from 'prop-types';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

SharedLayout.propTypes = {
  path: PropTypes.string.isRequired,
};
