import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

/**
 * This componet is used to show the news.
 * @param {string} darkMode - This variable is not used here, only passed to NavItem component.
 * @param {object} colorMode - This object is not used here, only passed to NavItem component.
 * @param {string} category - This string is used to set the news category.
 * @param {string} searchText - This string contain the search queries.
 * @returns {JSX.Element} - A JSX element shows News.
 */
export default function (props) {

    // common feature for news, its static
    const countries = 'in,gb,jp,tw,us';
    const languages = 'hi,en';

    // state variable to show articles
    const [articles, setArticles] = useState([]);

    // fetching API using fetch then axios
    const updateApiData = async () => {

        /* different api keys are here */
        // const url = `https://newsdata.io/api/1/news?apikey=pub_274779bfb5acff94dbe83253b43a956b05146&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}`;
        const url = `https://newsdata.io/api/1/news?apikey=pub_2760854888b87d2e70e610a41bf0490e639ad&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}`;

        // fetching the data using axios
        axios.get(url)

        // after the fetching the .then method will render the data in the app
        .then((response) => {
            setArticles(response.data.results);
        })
        
        // this method will catch the error during api fetching
        .catch(err => { 
            console.log(err);
        });
    }

    // fetching API after rendering 
    useEffect(() => {
        updateApiData();
    }, []);  // the empty array is passed to run the hook single time (to prevent re-rendering)


    return (
        <>
            <Grid container spacing={4}>

                {/* traversing in all artilcles */}
                {articles?.map((element) => {
                    return <Grid item lg={4} xs={12} sm={6} md={4} key={element.link}>
                        <NewsItem
                            darkMode={props.darkMode}
                            colorMode={props.colorMode}
                            title={element.title}
                            desc={element.description}
                            imageUrl={element.image_url}
                            newsUrl={element.link} />
                    </Grid>
                })}

            </Grid>
        </>
    )
}
