import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/about.jsx';

function App() {

  return (
    <main className='realtive min-h-screen w-screen overflow-x-hidden  '>
    <Navbar/>
     <Hero/>
     <About/>
    </main>
  )
}

export default App
