import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import { createTheme } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's optional.
export default createTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    useNextVariants: true
  }
});
