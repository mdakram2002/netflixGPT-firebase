import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import SecondryContainer from './SecondryContainer';
import MainContainers from './MainContainers';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTVShow from '../hooks/useTVShow';
import useTopRatedSeries from '../hooks/useTopRatedSeries';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTVShow();
  useTopRatedSeries();

  return (
    <div>
      <Header />
      <MainContainers />
      <SecondryContainer />
    </div>
  )
}


export default Browse;