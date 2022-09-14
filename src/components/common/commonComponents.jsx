import React from 'react'
import {Box, Typography} from '@material-ui/core'
import {useStyles} from '../HeaderComponents/HeaderStyles'
import {useStyles as bodyStyles} from '../BodyComponents/BodyStyles'

export const Decorator = ({lable, withIcon, icon, styles}) => {
  const classes = useStyles()
  return (
    <Box className={classes.decorator} style={styles}>
      <Typography variant="span" className={classes.decoratorText}>
        {lable}
      </Typography>
      {withIcon ? (
        <Typography variant="span" className={classes.arrow}>
          {icon}
        </Typography>
      ) : null}
    </Box>
  )
}

export const Divider = () => {
  const classes = bodyStyles()
  return <Typography variant="span" className={classes.Divider}></Typography>
}

export const RenderSectionHeading = (
  smallText,
  heading,
  description,
  alignCenter
) => {
  const classes = bodyStyles()
  return (
    <Box>
      {Decorator({
        lable: smallText,
        withIcon: false,
        styles: alignCenter ? {width: '100px', margin: '10px auto'} : {},
      })}
      <Typography
        variant="h4"
        align={alignCenter ? 'center' : 'left'}
        className={classes.sectionHeading}
      >
        {heading}
      </Typography>
      {Divider({
        style: alignCenter ? {margin: '16px auto'} : {margin: '16px 0px'},
      })}
      <Typography
        variant="body1"
        component="h6"
        align={alignCenter ? 'center' : 'left'}
        className={classes.sectionHeading}
      >
        {description}
      </Typography>
    </Box>
  )
}
