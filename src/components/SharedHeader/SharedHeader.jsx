import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavList, MainLink } from './SharedHeader.styled';

export const SharedHeader = () => {
  return (
    <>
      <Header>
        <NavList>
          <li>
            <MainLink to="/">Home</MainLink>
          </li>
          <li>
            <MainLink to="/movies">Movies</MainLink>
          </li>
        </NavList>
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
