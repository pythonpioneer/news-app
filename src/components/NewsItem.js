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
                <Grid item>
                    <img className="card-img-top" src="https://st.depositphotos.com/1026550/2711/i/950/depositphotos_27118113-stock-photo-modern-luxury-car.jpg" alt="Card image cap" />
                </Grid>

                <Grid item className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </Grid>
            </Grid>
        </>
    )
}
