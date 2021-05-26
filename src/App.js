import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import DashboardView from './components/Dashboard'
import Login from './components/Login'
import MeetingLog from './components/Meeting/Log'
import PageNotFound from './components/404'

const App = () => {
	console.log('one')

	return (
		// <React.StrictMode>

		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/dashboard" component={DashboardView} />
				<Route path="/meeting-log" component={MeetingLog} />
				<Route path="/page-not-found" component={PageNotFound} />
				<Redirect to="/page-not-found" />
			</Switch>
		</Router>

		// </React.StrictMode>
	)
}

export default App
