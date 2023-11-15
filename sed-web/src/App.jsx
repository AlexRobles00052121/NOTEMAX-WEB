import './App.css'
import InApp from './page/InApp/InApp';
import Login from './page/Login/Login';
import Registrer from './page/Register/Register';

import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


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
