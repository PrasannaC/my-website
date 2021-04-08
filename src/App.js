import './App.css';
import Nav from './components/Nav'

function App() {



  return (
    <div className="text-white h-screen w-full bg-gray-800 flex flex-col">
      <Nav> <span className="text-2xl font-semibold">Snake</span> </Nav>
      <div className="flex flex-row px-5 space-x-2">
        <div className="rounded-xl text-xl bg-gray-700 flex flex-col p-5 shadow-md h-96 w-full overflow-auto">
          <pre>{JSON.stringify({ "about": "Hello, I am Prasann. I am a software engineer. I love building apps with dotnet, and javascript." }, null, 2)}</pre>
        </div>

      </div>
    </div>
  );
}

export default App;
