import './App.css';
import Experience from './components/Experience/Experience';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';


function App() {

//Portfolio website

// 1.Navbar
//2. HomePage
//3. Tech Stack
//4. Experience
//5. Projects
  return (
    <div className='app'>
      <Navbar/>
      <section id='About'>
      <HomePage/>
      </section>
      <section id='Tools'>
      <TechStack/> 
      </section>
      <section id='Experience'>
      <Experience/>
      </section>
      <section id='Projects'>
      <Projects/>
      </section>
    </div>
  )
}

export default App