import './App.css';
import logo from './imgs/AFM.jpg'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { fknPayMe } from './utility/utility';

function App() {
  return (
    <div className="App" style={{
      opacity: fknPayMe('2024-5-1')
    }}>
      <Header logo={logo} />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
