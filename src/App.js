import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default App;
