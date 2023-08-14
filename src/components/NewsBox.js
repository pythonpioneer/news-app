import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
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
    const APIKEYS = [
        'pub_274779bfb5acff94dbe83253b43a956b05146',
        'pub_2760854888b87d2e70e610a41bf0490e639ad',
        'pub_27624e17447ea52db5843430daf5ba59d0324',
        'pub_276238be6f4fe846341b374724a6b77ec5df4',
    ];
    let apiStatus = true;

    // state variable 
    const [articles, setArticles] = useState([]);  // to show articles
    const [nextPage, setNextPage] = useState('');  // to show the next page articles
    const [loading, setLoading] = useState(true);  // to render the loading component while fetching data from API
    const [apiKey, setApiKey] = useState(APIKEYS[3]);  // to set the api key dynamically

    // check that the api key is working
    const checkApiKey = (APIKEYS) => {
        let idx = 0;
        let checkUrl;
        let error429 = false;

        // traversing to find valid api keys among all
        while(idx < APIKEYS.length){
            checkUrl = `https://newsdata.io/api/1/news?apikey=${APIKEYS[idx]}`;
            axios.get(checkUrl).catch(err => {
                error429 = true;
            });
            if(error429 === true) idx++;
            else {
                setApiKey(APIKEYS[idx]);
                apiStatus = false;
                console.log(apiStatus)
                break;
            };
        }
    };

    // fetching API using fetch then axios
    const updateApiData = async () => {
        if(apiStatus) {
            checkApiKey(APIKEYS);
            console.log(apiStatus);
        }
        props.setProgress(70);

        /* different api keys are here */
        const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}&page=${nextPage}`;

        // fetching the data using axios
        await axios.get(url)

            // after the fetching the .then method will render the data in the app
            .then((response) => {
                setArticles(response.data.results);
                setNextPage(response.data.nextPage);
                props.setProgress(100);
                setLoading(false);
            })

            // this method will catch the error during api fetching
            .catch(err => {
                console.log(err);
            })

    };

    // fetch more data from api
    const fetchMoreData = async () => {

        /* different api keys are here */
        const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}pizza&page=${nextPage}`;

        // fetching the data using axios
        await axios.get(url)

            // after the fetching the .then method will render the data in the app
            .then((response) => {
                setArticles(articles.concat(response.data.results));
                setNextPage(response.data.nextPage);
            })

            // this method will catch the error during api fetching
            .catch(err => {
                console.log(err);
            })

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
                // loader={<h2>yes</h2>}
                ></InfiniteScroll>

                {/* traversing in all artilcles */}
                {loading && <Loading />}
                {!loading && articles?.map((element) => {
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
    );
};
