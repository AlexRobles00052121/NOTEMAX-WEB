import './App.css'
import InApp from './page/InApp/InApp';
import Login from './page/Login/Login';
import Registrer from './page/Register/Register';
import { useEffect } from 'react';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  /*const handleBeforeUnload = () => {
    localStorage.removeItem('token');
  }

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);*/

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registrer' element={<Registrer />} />

        <Route path='/principal' element={<InApp />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  )
}

export default App;
