import React from 'react'
import { Grid } from '@mui/material'
import { Wrapper } from './HomeStyles'

import Menu from 'components/Menu/Menu'
import Contacts from 'components/Contacts/Contacts'
import ContactMobile from 'components/Contacts/ContactMobile'
import Messages from 'components/Messages/Messages'

const Home = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={1}
          lg={1}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <Menu />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{
            display: { xs: 'block', sm: 'none', md: 'none' },
            lg: 'none',
          }}
        >
          <ContactMobile />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{
            display: { xs: 'none', sm: 'block', md: 'block' },
            lg: 'block',
          }}
        >
          <Contacts />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <Messages />
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Home
