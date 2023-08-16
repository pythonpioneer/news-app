import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

/**
 * This componet is used to show the news.
 * @param {string} darkMode - This variable is not used here, only passed to NavItem component.
 * @param {object} colorMode - This object is not used here, only passed to NavItem component.
 * @param {string} category - This string is used to set the news category.
 * @param {string} searchText - This string contain the search queries.
 * @returns {JSX.Element} - A JSX element shows News.
 */
export default function NewsBox(props) {

    // common feature for news, its static
    const countries = 'in,gb,jp,tw,us';
    const languages = 'hi,en';

    // multiple api keys are here
    const APIKEYS = [
        'pub_274779bfb5acff94dbe83253b43a956b05146',
        'pub_2760854888b87d2e70e610a41bf0490e639ad',
        'pub_27624e17447ea52db5843430daf5ba59d0324',
        'pub_276238be6f4fe846341b374724a6b77ec5df4',
        'pub_276496088126ca73d3b3de8cf46aec7fe10f0',
    ];

    // state variable 
    const [articles, setArticles] = useState([]);  // to show articles
    const [nextPage, setNextPage] = useState('');  // to change the page
    const [loading, setLoading] = useState(true);  // to display spinner

    // fetching API using fetch then axios
    const updateApiData = async () => {
        props.setProgress(70);

        /* different api keys are here */
        const url = `https://newsdata.io/api/1/news?apikey=${APIKEYS[2]}&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}&page=${nextPage}`;

        // fetching the data using axios
        axios.get(url)

            // after the fetching the .then method will render the data in the app
            .then((response) => {
                setArticles(response.data.results);
                setNextPage(response.data.nextPage);
                setLoading(false);
                props.setProgress(100);
            })

            // this method will catch the error during api fetching
            .catch(err => {
                console.log(err);
            });
    };

    // fetch more data from api
    const fetchMoreData = async () => {

        /* different api keys are here */
        const url = `https://newsdata.io/api/1/news?apikey=${APIKEYS[2]}&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}&page=${nextPage}`;

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
        // eslint-disable-next-line
    }, []);  // the empty array is passed to run the hook single time (to prevent re-rendering)


    return (
        <Grid>

            {/* implementing pagenation */}
            <InfiniteScroll
                dataLength={articles?.length}
                next={fetchMoreData}
                hasMore={articles?.length < 50}  // there are alot of articles present, restricting after displaying some articles out of those
                loader={!loading && <Spinner />}
            >
                <Grid container spacing={4}>

                    {/* traversing in all artilcles */}
                    {!loading && articles?.map((element) => {
                        return <Grid item lg={4} xs={12} sm={6} md={4} key={element.link}>
                            <NewsItem
                                key={props.link}
                                darkMode={props.darkMode}
                                colorMode={props.colorMode}
                                title={element.title}
                                desc={element.description}
                                imageUrl={element.image_url}
                                newsUrl={element.link} />
                        </Grid>
                    })}

                </Grid>
            </InfiniteScroll>
        </Grid>
    );
};
