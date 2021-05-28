import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import DashboardView from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import MeetingLog from './components/Meeting/Log'
import PageNotFound from './components/404'
import Minute from './components/MeetingDetails/Minute'
import PrimaryRoute from './routes/Primary'

const App = () => {
	console.log('one')

	return (
		// <React.StrictMode>

		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/minute" component={Minute} />
				<Route path="/page-not-found" component={PageNotFound} />

				<PrimaryRoute path="/dashboard" component={DashboardView} />
				<PrimaryRoute path="/meeting-log" component={MeetingLog} />
				<Redirect to="/page-not-found" />

			</Switch>
		</Router>

		// </React.StrictMode>
	)
}

export default App
