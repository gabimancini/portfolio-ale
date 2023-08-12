import './App.css';
import Footer from './Components/templates/footer/Footer';
import Header from './Components/templates/header/Header';

import Router from './routes/router';
function App() {
  return ( 
    <>
      <Header />
    
        <main>
          <Router />
        </main>
     
      <Footer />
      </>
  );
}

export default App;
