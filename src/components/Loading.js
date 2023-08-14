import React from 'react';
import loading from '../icons/loader.gif';
import { Grid } from '@mui/material';

export default function Loading() {
    return (
        <Grid item sm={12} xs={12} md={12} lg={12} className='text-center'>
          <img style={{width: '15rem', height: '15rem'}} src={loading} alt="loading" />
        </Grid>
      )
}
