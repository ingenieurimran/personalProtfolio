import React from 'react'
import {Box, Typography} from '@material-ui/core'
import {useStyles} from './HeaderStyles'
import NavBar from './NavBar'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded'

function HeadersComponents() {
  const classes = useStyles()
  return (
    <Box className={classes.HeaderWraper}>
      <NavBar />
      <Box className={classes.Headercontainer}>
        <Typography variant="h3" component="h4" className={classes.headerTitle}>
          I'm a Webdeveloper, |
        </Typography>
        <Typography variant="h3" component="h4" className={classes.headerDesc}>
          I create Website and Application, Based on Your Need...
        </Typography>

        <Box className={classes.decorator}>
          <Typography variant="span" className={classes.decoratorText}>
            Contact Us
          </Typography>
          <Typography variant="span" className={classes.arrow}>
            <ArrowDownwardRoundedIcon />
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HeadersComponents
