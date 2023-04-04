import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/header.jsx';
import Content from './componentes/content/content.jsx';
import Footer from './componentes/footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <p>Hola mathi</p>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
