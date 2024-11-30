import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
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

  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GPTSearch />) :
          (<>
            <MainContainers />
            <SecondryContainer />
          </>)
      }
    </div>
  )
}


export default Browse;