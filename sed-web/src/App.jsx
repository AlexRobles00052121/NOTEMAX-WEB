import './App.css'
import InApp from './page/InApp/InApp';
import Login from './page/Login/Login';
import Registrer from './page/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from 'react-use';



function App() {

  const [user, setUser] =useLocalStorage('user');

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registrer' element={<Registrer/>} />
        <Route element={<PrivateRoute canActivate={user}/>}>
          <Route path='/principal' element={<InApp />} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>

  )
}

export default App;
