import React from 'react'
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import {useStyles} from './HeaderStyles'
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined'
import {Theme} from '../Theme'

function NavBar() {
  const classes = useStyles()

  const navItems = [
    {
      lable: 'About',
      Id: 'About',
    },
    {
      lable: 'Portfolio',
      Id: 'About',
    },
    {
      lable: 'Contact',
      Id: 'About',
    },
  ]
  return (
    <AppBar position="fixed" className={classes.NavBar}>
      <Toolbar
        className={classes.ToolBar}
        style={{backgroundColor: Theme.colors.base1}}
      >
        <Typography variant="h5" component="h6">
          Ali
        </Typography>
        {/* navlinks */}
        <Box component={Hidden} xsDown>
          <Box>
            {navItems.map((item, i) => (
              <Button className={classes.NavLinks}>{item.lable}</Button>
            ))}
          </Box>
        </Box>
        <Box component={Hidden} smUp>
          <IconButton color="inherit">
            <MenuOpenOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
