import { Grid } from '@mui/material';
import React from 'react';
import NewsItem from './NewsItem';

export default function () {
    return (
        <>
          <Grid container spacing={4} style={{marginTop: ''}}>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem />
            </Grid>
            
          </Grid>  
        </>
    )
}
