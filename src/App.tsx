
import './App.css';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Pricing from './components/pricing';
function App() {


  return (
    <>
     
      <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
  
        <Footer/>
      </Router>
    </>
  )
}

export default App
