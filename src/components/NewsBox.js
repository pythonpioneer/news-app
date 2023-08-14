import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';

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

    // state variable 
    const [articles, setArticles] = useState([]);  // to show articles
    const [nextPage, setNextPage] = useState('');

    // fetching API using fetch then axios
    const updateApiData = async () => {

        /* different api keys are here */
        const url = `https://newsdata.io/api/1/news?apikey=pub_274779bfb5acff94dbe83253b43a956b05146&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}&page=${nextPage}`;
        // const url = `https://newsdata.io/api/1/news?apikey=pub_2760854888b87d2e70e610a41bf0490e639ad&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}&page=${page}`;

        // fetching the data using axios
        axios.get(url)

            // after the fetching the .then method will render the data in the app
            .then((response) => {
                setArticles(response.data.results);
                setNextPage(response.data.nextPage);
            })

            // this method will catch the error during api fetching
            .catch(err => {
                console.log(err);
            });
    };

    // fetch more data from api
    const fetchMoreData = async () => {
        
        /* different api keys are here */
        const url = `https://newsdata.io/api/1/news?apikey=pub_274779bfb5acff94dbe83253b43a956b05146&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}&page=${nextPage}`;
        // const url = `https://newsdata.io/api/1/news?apikey=pub_2760854888b87d2e70e610a41bf0490e639ad&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}&page=${page}`;

        // fetching the data using axios
        axios.get(url)

            // after the fetching the .then method will render the data in the app
            .then((response) => {
                setArticles(articles.concat(response.data.results));
                setNextPage(response.data.nextPage);
            })

            // this method will catch the error during api fetching
            .catch(err => {
                console.log(err);
            });
    };  

    // fetching API after rendering 
    useEffect(() => {
        updateApiData();
    }, []);  // the empty array is passed to run the hook single time (to prevent re-rendering)


    return (
        <>
            <Grid container spacing={4}>
                {/* implementing pagenation */}
                <InfiniteScroll
                    dataLength={articles?.length}
                    next={fetchMoreData}
                    hasMore={articles?.length < 100}  // there are alot of articles present, restricting after displaying some articles out of those
                    loader={<h2>yes</h2>}
                ></InfiniteScroll>

                {/* traversing in all artilcles */}
                {articles?.map((element) => {
                    return <Grid item lg={4} xs={12} sm={6} md={4} key={element.link}>
                        <NewsItem
                            key={element.link}
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
    );
};
