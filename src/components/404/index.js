import React from 'react'
import { Link } from 'react-router-dom'

import styles from './style.module.css'

const NotFoundPage = () => (
	<div className={styles.main}>
		<div></div>
		<div>
			<span className={styles.text}>404</span>
			<span className={styles.sub}>the page you are looking is not here.</span>
		</div>
		<Link className={styles.link} to="/">
			Go to Home
		</Link>
	</div>
)
export default NotFoundPage
