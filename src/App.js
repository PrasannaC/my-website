import './App.css';
import Nav from './components/Nav'
import FadeIn from './components/FadeIn'
import Bounce from './components/Bounce'
import AboutCard from './components/AboutCard'
import Anime from 'react-anime'
function App() {



  return (
    <Anime easing='easeInOutCirc' scale={[0.95, 1]}>
      <FadeIn>
        <div className="flex-grow min-h-screen bg-gray-100 flex flex-col space-y-2 py-2 px-2 items-stretch">
          <Bounce direction="X" value={[50, 0]}>
            <Nav> <a target="_blank" href="https://dogecoin.com/" className="text-2xl font-semibold hover:text-green-500">$DOGE</a> </Nav>
          </Bounce>

          <section className="flex-grow flex flex-col shadow-md rounded-md w-full bg-gray-50 m-auto">
            <Bounce className="" direction="Y" value={[50, 0]}>
              <AboutCard />
            </Bounce>
          </section>

          <footer>
            <div className="h-48 bg-green-400 ring-1 bottom-0 flex-1 justify-center">

            </div>
          </footer>
        </div>
      </FadeIn >
    </Anime>
  );
}

export default App;
