import {makeStyles, Toolbar} from '@material-ui/core'
import {Theme} from '../Theme'
// import Images from '../../../public/Images/c.png'
import Images from '../assets/Images/a.jpg'

export const useStyles = makeStyles((theme) => ({
  HeaderWraper: {
    width: '100%',
    minHeight: '90vh',
    height: 'auto',
    background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Images})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeate',
  },
  Headercontainer: {
    width: '100%',
    minHeight: '90vh',
    height: 'auto',
    padding: '20px',
    color: Theme.colors.base2,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    fontFamily: 'roboto',
  },
  headerTitle: {
    fontSize: '3rem',
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  headerDesc: {
    fontSize: '2rem',
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3rem',
      margin: theme.spacing(2, 0),
    },
  },
  NavBar: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
  },
  ToolBar: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  NavLinks: {
    color: Theme.colors.base2,
  },

  //   decorator.
  decorator: {
    display: 'flex',
    fontWeight: 'bolder',
    fontFamily: 'roboto',
    position: 'relative',
    marginTop: '20px',
    '&:before': {
      width: '45px',
      height: '45px',
      backgroundColor: Theme.colors.primary,
      content: '" "',
      borderRadius: '50%',
    },
  },
  decoratorText: {
    lineHeight: '45px',
    position: 'absolute',
    left: '20px',
  },
  arrow: {
    lineHeight: '45px',
    position: 'absolute',
    left: '100px',
    animationName: 'upDown',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },

  //   create animation
  '@global': {
    '@keyframes upDown': {
      '0%': {
        paddingTop: '0px',
        transform: 'scale(0)',
      },
      '100%': {
        paddingTop: '10px',
        transform: 'scale(1)',
      },
    },
  },
}))
