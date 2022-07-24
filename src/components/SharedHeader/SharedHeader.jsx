import { Link, Outlet } from 'react-router-dom';

export const SharedHeader = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </>
  );
};
