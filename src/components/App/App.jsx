import { Routes, Route } from 'react-router-dom';
import { SharedHeader, Home } from 'components';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedHeader />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<div>MOVIES</div>} />
        </Route>
      </Routes>
    </>
  );
};
