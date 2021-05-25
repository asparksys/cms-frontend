import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardView from './components/Dashboard'
import Login from './components/Login'
import Minute from './components/Minute'

const App = () => {
  console.log('one')

  return (
    // <React.StrictMode>

    <Router>
        <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' component={DashboardView} />
        <Route path='/minute' component={Minute} />

        </Switch>
    </Router>

    // </React.StrictMode>
  )
}

export default App
