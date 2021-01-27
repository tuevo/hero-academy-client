import { colors } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.purple['A700'],
    main: colors.purple['A700'],
    light: 'rgba(123, 31, 162, 0.1)',
    light1: 'rgba(123, 31, 162, 0.15)'
  },
  secondary: {
    contrastText: white,
    dark: colors.amber[900],
    main: colors.amber[800],
    light: colors.amber['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: white,
    secondary: colors.grey[400],
    link: colors.orange['A400'],
    disabled: colors.grey[600],
    topbar: purple['A700'],
    sidebarActive: white
  },
  background: {
    default: '#212111',
    paper: '#313131',
    course: '#212121',
    user: '#212121',
    signIn: 'rgba(0,0,0,0.4)',
    signUp: 'rgba(0,0,0,0.4)',
    searchInput: '#414141'
  },
  topbar: {
    background: '#313131',
    "boxShadow": "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px"
  },
  sidebar: {
    background: 'rgba(0,0,0,0.4)',
    "boxShadow": "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
  },
  border: {
    color: '#515151'
  },
  card: {
    backgroundColor: '#313131',
    borderRadius: '1.5rem',
    "boxShadow": "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"
  },
  input: {
    '&:before': {
      borderColor: '#616161'
    }
  },
  icon: colors.grey[400],
  divider: colors.grey[200]
};
