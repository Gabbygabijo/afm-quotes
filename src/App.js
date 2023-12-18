import './App.css';
import logo from './imgs/AFM.jpg'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
