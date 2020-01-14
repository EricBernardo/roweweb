import React from "react"
import { Router } from 'react-router-dom'

import './config/ReactotronConfig'

import Routes from './routes/index'
import history from './services/history'
import GlobalSlyle from './styles/global'

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <GlobalSlyle />
      </Router>
    </>
  );
}

export default App;
