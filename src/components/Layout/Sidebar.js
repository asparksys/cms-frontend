import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import MessageRoundedIcon from '@material-ui/icons/MessageRounded'

const useStyles = makeStyles((theme) => ({
	drawer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		backgroundColor: theme.palette.primary.main,
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
	links: {
		color: theme.palette.primary.contrastText,
		marginBottom: 10,
	},
}))
const Sidebar = () => {
	const classes = useStyles()
	return (
		<Drawer classes={{ paper: classes.drawer }} variant="permanent">
			<List>
				<ListItem button key={1}>
					<HomeRoundedIcon className={classes.links} />
				</ListItem>
				<ListItem button key={2}>
					<MessageRoundedIcon className={classes.links} />
				</ListItem>
				<ListItem button key={3}>
					<ExitToAppRoundedIcon className={classes.links} />
				</ListItem>
			</List>
		</Drawer>
	)
}

export default Sidebar
