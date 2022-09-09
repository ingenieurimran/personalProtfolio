import { makeStyles } from '@material-ui/core'
import { Theme } from '../Theme'
// import Images from '../../../public/Images/c.png'
import Images from '../assets/Images/b.jpg'

export const useStyles = makeStyles(() => ({
  HeaderWraper: {
    width: '100%',
    minHeight: '90vh',
    height: 'auto',
    background: `linear-gradient(to bottom right, #04303140,#00606473), url(${Images})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeate',
    // backgroundColor: Theme.colors.base1,
  },
}))
