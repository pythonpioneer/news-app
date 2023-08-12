import React from 'react';
import { Grid } from '@mui/material';

export default function NewsItem() {
    return (
        <>
            <Grid className='container bg-light'>
                <Grid className="card">
                    <img className="card-img-top" src="https://st.depositphotos.com/1026550/2711/i/950/depositphotos_27118113-stock-photo-modern-luxury-car.jpg" style={{width: '200px', height: '200px'}} alt="Card image cap" />
                    <Grid className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
