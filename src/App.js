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
      <section id='Home'><Home/></section>
      
      <section id='About'><About/></section>
      
      <section id='Skills'><Skills/></section>
      
      <section id='Contact'><Contact/></section>
      
    </>
  );
}

export default App;
