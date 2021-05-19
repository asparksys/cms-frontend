import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardView from './components/Dashboard';
import Login from './components/Login';
import { Container } from '@material-ui/core'; 

const App = () => {
    console.log('one')

    return(
    <React.StrictMode>
        <Container>

    <Router>
        <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' component={DashboardView} />
        </Switch>
    </Router>
    </Container>

    </React.StrictMode>
    )
}
    
  

export default App;

