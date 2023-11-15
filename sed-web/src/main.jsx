import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoteContextProvider from './contexts/NoteContext.jsx'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteContextProvider> 
      <App />
    </NoteContextProvider>
  </React.StrictMode>
)
