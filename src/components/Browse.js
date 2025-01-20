import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
<<<<<<< HEAD
import SecondryContainer from './SecondryContainer';
import MainContainers from './MainContainers';

const Browse = () => {
  useNowPlayingMovies();
=======
import GPTSearch from './GptSearch';
import SecondryContainer from './SecondryContainer';
import MainContainers from './MainContainers';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTVShow from '../hooks/useTVShow';
import useTopRatedSeries from '../hooks/useTopRatedSeries';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTVShow();
  useTopRatedSeries();
>>>>>>> 626cd9ab50167197d7078e82ae71325efb3551a7

  return (
    <div>
      <Header />
<<<<<<< HEAD
      <MainContainers />
      <SecondryContainer />
      <div className='flex items-center justify-center w-full h-screen'>
        This is Browse page
      </div>
=======
      {
        showGptSearch ? (<GPTSearch />) :
          (<>
            <MainContainers />
            <SecondryContainer />
          </>)
      }
>>>>>>> 626cd9ab50167197d7078e82ae71325efb3551a7
    </div>
  )
}


export default Browse;