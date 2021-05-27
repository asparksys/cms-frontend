import React from 'react'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { makeStyles } from '@material-ui/core/styles'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import MessageRoundedIcon from '@material-ui/icons/MessageRounded'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		position: 'fixed',
		bottom: '0',
		width: '100%',
	},
})

const MobileNav = () => {
	const classes = useStyles()
	const [value, setValue] = React.useState(1)
	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue)
			}}
			showLabels
			className={classes.root}
		>
			<BottomNavigationAction label="Dashboard" icon={<HomeRoundedIcon />} />
			<BottomNavigationAction label="Meetings" icon={<MessageRoundedIcon />} />
			<BottomNavigationAction label="Logout" icon={<ExitToAppRoundedIcon />} />
		</BottomNavigation>
	)
}
export default MobileNav
