import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

/**
 * This componet is used to show the news.
 * @param {string} darkMode - This variable is not used here, only passed to NavItem component.
 * @param {object} colorMode - This object is not used here, only passed to NavItem component.
 * @returns {JSX.Element} - A JSX element shows News.
 */
export default function (props) {

    // state variable to show articles
    const [articles, setArticles] = useState([]);

        // fetching API using fetch then axios
        const updateApiData = async () => {
            const url = 'https://newsdata.io/api/1/news?apikey=pub_274779bfb5acff94dbe83253b43a956b05146';
            let data = await fetch(url);
            let parsedData = await data.json();

            setArticles(parsedData.results);

        }
        
        // fetching API after rendering 
        useEffect(() => {
            updateApiData();
        }, []);


    return (
        <>
        {console.log(articles)}
            <Grid container spacing={4}>

                {/* traversing in all artilcles */}
                {articles?.map((element) => {
                    return <Grid item lg={4} xs={12} sm={6} md={4} key={element.link}>
                        <NewsItem

                            // to change color mode
                            darkMode={props.darkMode}
                            colorMode={props.colorMode}

                            // related to API
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
