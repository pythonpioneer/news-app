import { Grid } from '@mui/material';
import React from 'react';
import NewsItem from './NewsItem';

/**
 * This componet is used to show the news.
 * @param {string} darkMode - This variable is not used here, only passed to NavItem component.
 * @param {object} colorMode - This object is not used here, only passed to NavItem component.
 * @returns {JSX.Element} - A JSX element shows News.
 */
export default function (props) {
    return (
        <>
          <Grid container spacing={4}>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem darkMode={props.darkMode} colorMode={props.colorMode} />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem darkMode={props.darkMode} colorMode={props.colorMode} />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem darkMode={props.darkMode} colorMode={props.colorMode} />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem darkMode={props.darkMode} colorMode={props.colorMode} />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem darkMode={props.darkMode} colorMode={props.colorMode} />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem darkMode={props.darkMode} colorMode={props.colorMode} />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem darkMode={props.darkMode} colorMode={props.colorMode} />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem darkMode={props.darkMode} colorMode={props.colorMode} />
            </Grid>
            <Grid item lg={4} xs={12} sm={6} md={4}>
                <NewsItem darkMode={props.darkMode} colorMode={props.colorMode} />
            </Grid>
            
            
          </Grid>  
        </>
    )
}
