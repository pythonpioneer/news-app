import React from 'react';
import loading from '../icons/loading.gif';
import { Grid } from '@mui/material';

export default function Spinner(props) {
  return (
    <>
      <Grid item lg={12} sm={12} xs={12} className='text-center mt-4'>
        <img style={{width: '5rem', height: '5rem'}} src={loading} alt="loading" />
      </Grid>
    </>
  )
}
