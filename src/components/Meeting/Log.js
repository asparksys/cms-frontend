import React, { useEffect, useState } from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import MobileNav from '../Layout/MobileNav'
import Sidebar from '../Layout/Sidebar'
import styles from './Log.module.css'
import MeetingCard from './MeetingCard'
import Pagination from './Pagination'
import PreMeetingCard from './PreMeetingCard'

const fakedata = [
	{
		id: 1,
		title: 'Meeting 1',
		agenda: 'Agenda',
		body: 'Lorem ipsum doler it ola ola',
		date: 'March 9, 2021',
	},
	{
		id: 2,
		title: 'Meeting 1',
		agenda: 'Agenda',
		body: 'Lorem ipsum doler it ola ola',
		date: 'March 9, 2021',
	},
	{
		id: 3,
		title: 'Meeting 1',
		agenda: 'Agenda',
		body: 'Lorem ipsum doler it ola ola',
		date: 'March 9, 2021',
	},
	{
		id: 4,
		title: 'Meeting 1',
		agenda: 'Agenda',
		body: 'Lorem ipsum doler it ola ola',
		date: 'March 9, 2021',
	},
	{
		id: 5,
		title: 'Meeting 1',
		agenda: 'Agenda',
		body: 'Lorem ipsum doler it ola ola',
		date: 'March 9, 2021',
	},
	{
		id: 6,
		title: 'Meeting 1',
		agenda: 'Agenda',
		body: 'Lorem ipsum doler it ola ola',
		date: 'March 9, 2021',
	},
]
const Log = () => {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const identifier = setTimeout(() => setLoading(false), 5000)
		return () => clearTimeout(identifier)
	}, [])
	return (
		<>
			<Hidden smDown>
				<Sidebar />
			</Hidden>
			<Container maxWidth="lg" className={styles.container}>
				<Box
					alignItems="center"
					display="flex"
					justifyContent="space-between"
					className={styles.header}
				>
					<h1>Minutes</h1>
					<Button variant="contained" color="primary">
						+ Create Minute
					</Button>
				</Box>
				<Grid container spacing={3}>
					{fakedata.map((e) => (
						<Grid key={e.id} item xs={12} sm={6}>
							{loading ? <PreMeetingCard /> : <MeetingCard />}
						</Grid>
					))}
				</Grid>
				<Pagination />
			</Container>
			<Hidden mdUp>
				<MobileNav />
			</Hidden>
		</>
	)
}

export default Log
