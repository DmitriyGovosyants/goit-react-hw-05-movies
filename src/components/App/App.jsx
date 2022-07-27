import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedHeader } from 'components';
import { routesPath } from 'routerSettings/settings';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedHeader />}>
          <Route index element={<Home />} />
          <Route path={routesPath.movies} element={<Movies />} />
          <Route path={routesPath.movieId} element={<MovieDetails />}>
            <Route path={routesPath.cast} element={<Cast />} />
            <Route path={routesPath.reviews} element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
