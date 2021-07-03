import '../scss/App.scss';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Modal from './modal';

function App() {
  return (
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>
      <Modal/>
    </div>
  );
}

export default App;
