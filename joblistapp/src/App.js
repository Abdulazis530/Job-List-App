import './assets/styles/style.scss';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <>
      <Header />
      <SearchBox />
      <Card />
      <Footer />
    </>
  );
}

export default App;
