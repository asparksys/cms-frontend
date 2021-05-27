import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#732020',
			dark: '#461919',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#000',
			dark: '#ba000d',
			contrastText: '#fff',
		},
	},
})

export default theme
