import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardView from './components/Dashboard';
import Login from './components/Login';


const App = () => {
    console.log('one')

    return(
    <>
    <Router>
        <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' component={DashboardView} />
        </Switch>
    </Router>
    </>
    )
}
    
  

export default App;

