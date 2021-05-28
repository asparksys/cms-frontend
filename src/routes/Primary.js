import React from 'react'
import { Route } from 'react-router-dom'
import Nav from '../components/Layout/Nav'

const PrimaryRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<>
				<Nav />
				<Component {...props} />
			</>
		)}
	/>
)

export default PrimaryRoute
