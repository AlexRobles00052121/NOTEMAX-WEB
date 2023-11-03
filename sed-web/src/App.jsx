import './App.css'
import InApp from './page/InApp/InApp';
import Login from './page/Login/Login';
import Registrer from './page/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (

    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/registrer' element={<Registrer />} />
        <Route path='/principal' element={<InApp />} />
      </Routes>
    </Router>

  )
}

export default App;
