import React from 'react'
import {Box, Grid, Hidden} from '@material-ui/core'
import {useStyles} from './BodyStyles'
import Image from '../assets/Images/About.jpg'
import {RenderSectionHeading} from '../common/commonComponents'

export const AboutUs = () => {
  const classes = useStyles()
  return (
    <Box className={classes.section}>
      <Grid container>
        <Grid item sm={5}>
          <img src={Image} alt="about us" className={classes.ResposiveImg} />
        </Grid>
        <Grid item xs={12} sm={7}>
          {RenderSectionHeading({
            smallText: 'About Me',
            heading: 'Hello I am Imran Ali',
            description:
              'A self taught developer who loves to codes something that wiil impact majority of the people in good waay !',
          })}
        </Grid>
      </Grid>
    </Box>
  )
}
