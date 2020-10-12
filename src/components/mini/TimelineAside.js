import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Loader from '../mini/Loader';
import NewsItem from '../mini/NewsItem';
import fetchCategoricalNews from "../../helpers/setNewsCategories";
import fetchGlobalNews from "../../helpers/setNewsGlobal";
import fetchLocalNews from "../../helpers/setNewsLocal";

const TimelineAside = () => {

    const dispatch = useDispatch();
    const localNews = useSelector(state => state.localNewsReducer);
    const globalNews = useSelector(state => state.globalNewsReducer);
    const categoricalNews = useSelector(state => state.categoricalNewsReducer);
    const [globalNewsIsLoading, setGlobalNewsIsLoading] = useState(true);
    const [localNewsIsLoading, setLocalNewsIsLoading] = useState(true);
    const [categoricalNewsIsLoading, setCategoricalNewsIsLoading] = useState(true);

    useEffect(() => {
        (async function () {

            await dispatch(await fetchLocalNews());
            await setLocalNewsIsLoading(false);

            await dispatch(await fetchGlobalNews());
            await setGlobalNewsIsLoading(false);

            await dispatch(await fetchCategoricalNews());
            await setCategoricalNewsIsLoading(false);

        })()
    }, [])

    return (
        <aside className="col-sm-5" id="timelinenouser-news-list">
            <h3 className="mt-sm-5 mt-md-0">Local News</h3>
            <ul className="list-group" id="timelinenouser-news">
                {
                    !localNewsIsLoading
                        ? localNews.map(news => (
                            <NewsItem
                                key={news.publishedAt}
                                source={news.source}
                                title={news.title}
                                description={news.description}
                                url={news.url}
                                urlToImage={news.urlToImage}
                                publishedAt={news.publishedAt}
                            />
                        ))
                        : <Loader />
                }
            </ul>

            <h3 className="mt-5">Global News</h3>
            <ul className="list-group" id="timelinenouser-news">
                {
                    !globalNewsIsLoading
                        ? globalNews.map(news => (
                            <NewsItem
                                key={news.publishedAt}
                                source={news.source}
                                title={news.title}
                                description={news.description}
                                url={news.url}
                                urlToImage={news.urlToImage}
                                publishedAt={news.publishedAt}
                            />
                        ))
                        : <Loader />
                }
            </ul>

            <h3 className="mt-5">Top Stories</h3>
            <ul className="list-group" id="timelinenouser-news">
                {
                    !categoricalNewsIsLoading
                        ? Object.keys(categoricalNews).map(category => (
                            <NewsItem
                                label={
                                    category
                                        .charAt(0)
                                        .toUpperCase() + category.slice(1)
                                }
                                key={categoricalNews[category].publishedAt}
                                source={categoricalNews[category].source}
                                title={categoricalNews[category].title}
                                description={categoricalNews[category].description}
                                url={categoricalNews[category].url}
                                urlToImage={categoricalNews[category].urlToImage}
                                publishedAt={categoricalNews[category].publishedAt}
                            />
                        ))
                        : <Loader />
                }
            </ul>

            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
            >
                <div class="item"><h4>1</h4></div>
                <div class="item"><h4>2</h4></div>
                <div class="item"><h4>3</h4></div>
                <div class="item"><h4>4</h4></div>
                <div class="item"><h4>5</h4></div>
                <div class="item"><h4>6</h4></div>
                <div class="item"><h4>7</h4></div>
                <div class="item"><h4>8</h4></div>
                <div class="item"><h4>9</h4></div>
                <div class="item"><h4>10</h4></div>
                <div class="item"><h4>11</h4></div>
                <div class="item"><h4>12</h4></div>
            </OwlCarousel>
        </aside>
    )
}

export default TimelineAside;