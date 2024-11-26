import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import SecondryContainer from './SecondryContainer';
import MainContainers from './MainContainers';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainers />
      <SecondryContainer />
      <div className='flex items-center justify-center w-full h-screen'>
        This is Browse page
      </div>
    </div>
  )
}


export default Browse;