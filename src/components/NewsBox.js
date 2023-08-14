import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState, useLayoutEffect, useMemo } from 'react';
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
        'pub_276496088126ca73d3b3de8cf46aec7fe10f0',
    ];
    let apiStatus = true;

    // state variable 
    const [articles, setArticles] = useState([]);  // to show articles
    const [nextPage, setNextPage] = useState('');  // to show the next page articles
    const [loading, setLoading] = useState(true);  // to render the loading component while fetching data from API

    // to set the api key dynamically
    let apiKey = APIKEYS[0];
    function setApiKey(key) {
        apiKey = key;
    }

    // fetching API using fetch then axios
    const updateApiData = async (val) => {

        let idx = 0;
        let checkUrl;
        let error429 = false;

        // traversing to find valid api keys among all
        while (idx < APIKEYS.length) {
            checkUrl = `https://newsdata.io/api/1/news?apikey=${APIKEYS[idx]}`;
            await axios.get(checkUrl)

                // means apikey is valid
                .then((response) => {
                    console.log("thens" + idx);
                    error429 = false;
                })

                // means apikey is not valid
                .catch(err => {
                    console.log("catchs" + idx);
                    error429 = true;
                });

            // means the given url is not valid
            if (error429 === true) {
                console.log("ifs" + idx);
                idx += 1;
            }

            // when the given apikey is working
            else {
                console.log("elses" + idx);
                apiStatus = false;
                console.log("apistatuss " + apiStatus);
                break;
            }
        }

        

        console.log("update " + APIKEYS[idx])
        console.log("val" + idx)
        props.setProgress(70);

        /* different api keys are here */
        const url = `https://newsdata.io/api/1/news?apikey=${APIKEYS[idx]}&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}&page=${nextPage}`;

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

        let idx = 0;
        let checkUrl;
        let error429 = false;

        // traversing to find valid api keys among all
        while (idx < APIKEYS.length) {
            checkUrl = `https://newsdata.io/api/1/news?apikey=${APIKEYS[idx]}`;
            await axios.get(checkUrl)

                // means apikey is valid
                .then((reponse) => {
                    console.log("then" + idx);
                    error429 = false;
                })

                // means apikey is not valid
                .catch(err => {
                    console.log("catch" + idx);
                    error429 = true;
                });

            // means the given url is not valid
            if (error429 === true) {
                console.log("if" + idx);
                idx += 1;
            }

            // when the given apikey is working
            else {
                console.log("else" + idx);
                setApiKey(APIKEYS[idx]);
                apiStatus = false;
                console.log("apistatus " + apiStatus);
                console.log(apiKey);
                break;
            }
        }
        console.log("fetch " + APIKEYS[idx])


        /* different api keys are here */
        const url = `https://newsdata.io/api/1/news?apikey=${APIKEYS[idx]}&country=${countries}&language=${languages}&category=${props.category}&q=${props.searchText}pizza&page=${nextPage}`;

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
