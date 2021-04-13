import './App.css';
import Nav from './components/Nav'
import FadeIn from './components/FadeIn'
import Bounce from './components/Bounce'
import AboutCard from './components/AboutCard'
import Anime from 'react-anime'
function App() {



  return (
    <div className="h-full w-full flex-grow bg-gray-100 flex flex-col space-y-2 py-2 px-2 items-stretch">
      <FadeIn>
        <Bounce direction="X" value={[10, 0]}>
          <Nav> <a target="_blank" rel="noreferrer" href="https://dogecoin.com/" className="text-2xl font-semibold hover:text-green-500">$DOGE</a> </Nav>
        </Bounce>
      </FadeIn >

      <FadeIn>
        <section className="flex-grow flex flex-col shadow-md rounded-md w-full bg-gray-50 m-auto">
          <Bounce className="" direction="Y" value={[10, 0]}>
            <AboutCard />
          </Bounce>
        </section>
      </FadeIn>
      <FadeIn>
        <Bounce className="" direction="Y" value={[-5, 0]}>
          <div className="flex-col items-end my-auto h-100 w-full">
            <footer className="p-2 flex-1 flex-row flex-grow m-auto">
              <div className="w-100 h-48 bg-green-400 ring-1 bottom-0 flex-1 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </footer>
          </div>
        </Bounce>

      </FadeIn>
    </div>
  );
}

export default App;
