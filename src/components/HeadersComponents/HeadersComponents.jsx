import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles'
import Navbar from './Navbar'

function HeadersComponents() {
  const classes = useStyles()
  return (
    <Box className={classes.HeaderWraper}>
      <Navbar />
      <Box className={classes.Headercontainer}>
        <Typography variant="h1" component="h6">
          Hello Word!
        </Typography>
      </Box>
    </Box>
  )
}

export default HeadersComponents
