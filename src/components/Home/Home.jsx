import { useEffect } from 'react';
import { fetchTrending } from 'services/filmsApi';

export const Home = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const thais = await fetchTrending(1);
        console.log(thais);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  console.log('очередной рендер');

  return (
    <>
      <div>HOME</div>
    </>
  );
};
