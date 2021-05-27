import React from 'react'
import { Link } from 'react-router-dom'

import styles from './style.module.css'

class NotFoundPage extends React.Component {
	render() {
		return (
			<div>
				<p style={{ textAlign: 'center' }}>
					<span className={styles.text}>404</span>
					<span className={styles.sub}>the page you are looking is not here.</span>
					<Link to="/">Go to Home</Link>
				</p>
			</div>
		)
	}
}
export default NotFoundPage
