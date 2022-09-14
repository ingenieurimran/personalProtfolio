import {makeStyles} from '@material-ui/core'
import {Theme} from '../Theme'

export const useStyles = makeStyles((theme) => ({
  section: {
    background: Theme.colors.base1,
    padding: theme.spacing(10, 8),
  },
  divider: {
    width: '65px',
    height: '4px',
    backgroundColor: Theme.colors.primary,
  },
  ResposiveImg: {
    width: '100%',
    height: 'auto',
  },
}))
