import './index.css'

import React from 'react'
import {render} from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
)

render(routing, document.querySelector('#app'))
