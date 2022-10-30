import { Outlet } from 'react-router-dom';
import { Header, HeaderLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <HeaderLink to="/Home">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
