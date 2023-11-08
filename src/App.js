import './App.css';
import logo from './imgs/AFM.jpg'
import Header from './components/Header'
import Section from './components/Section'

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Section />
    </div>
  );
}

export default App;
