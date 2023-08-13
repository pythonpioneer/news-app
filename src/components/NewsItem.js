import React from 'react';
import { Grid } from '@mui/material';

/**
 * This componet contain the structure of the news.
 * @param {string} darkMode - This variable is used to set color for day and night mode.
 * @param {object} colorMode - This object contain all the style color format for changing the color mode.
 * @returns {JSX.Element} - A JSX element shows news.
 */
export default function NewsItem(props) {
    return (
        <>
            <Grid container className="container card" style={props.darkMode === 'dark' ? props.colorMode.darkModeBody : props.colorMode.lightMode}>
                <Grid item lg={12} sm={12} xs={12}>
                    <img className="card-img-top" src={props.imageUrl ? props.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRaxlxQVfs3QBxs7QpGtixpAV47sMBqkMoA&usqp=CAU"} style={{height: '250px'}} alt="Card image cap" />
                </Grid>

                <Grid item lg={12} sm={12} xs={12} className="card-body">
                    <h5 className="card-title">{props.title.length > 50 ? props.title.slice(0, 50) + '...' : props.title}</h5>
                    <p className="card-text">{props.desc.length > 91 ? props.desc.slice(0, 91) + '...' : props.desc}</p>
                    <a href={props?.newsUrl} className="btn btn-primary" style={{backgroundColor: '#01283b'}}>Read More</a>
                </Grid>
            </Grid>
        </>
    )
}
