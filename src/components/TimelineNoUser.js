import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DiscoverPeopleItem from './mini/DiscoverPeopleItem';
import MessageItem from './mini/MessageItem';
import NewsItem from './mini/NewsItem';
import Loader from './mini/Loader';
import fetchMessage from "../helpers/setMessages";
import fetchCategoricalNews from "../helpers/setNewsCategories";
import fetchGlobalNews from "../helpers/setNewsGlobal";
import fetchLocalNews from "../helpers/setNewsLocal";
import fetchDiscoverPeople from '../helpers/setDiscoverPeople';

const TimelineNoUser = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messageReducer);
    const localNews = useSelector(state => state.localNewsReducer);
    const globalNews = useSelector(state => state.globalNewsReducer);
    const categoricalNews = useSelector(state => state.categoricalNewsReducer);
    const discoverPeople = useSelector(state => state.discoverReducer.discoverPeople);
    const [messagesIsLoading, setMessagesIsLoading] = useState(true);
    const [globalNewsIsLoading, setGlobalNewsIsLoading] = useState(true);
    const [localNewsIsLoading, setLocalNewsIsLoading] = useState(true);
    const [categoricalNewsIsLoading, setCategoricalNewsIsLoading] = useState(true);
    const [discoverPeopleIsLoading, setDiscoverPeopleIsLoading] = useState(true);

    useEffect(() => {
        (async function () {

            await dispatch(await fetchMessage());
            await setMessagesIsLoading(false);

            await dispatch(await fetchLocalNews());
            await setLocalNewsIsLoading(false);

            await dispatch(await fetchGlobalNews());
            await setGlobalNewsIsLoading(false);

            await dispatch(await fetchCategoricalNews());
            await setCategoricalNewsIsLoading(false);

            await dispatch(await fetchDiscoverPeople());
            await setDiscoverPeopleIsLoading(false);

        })()
    }, [])

    return (
        <React.Fragment>

            <header className="home-hero">
                <h1>What's happening?</h1>
                <h4>New to Warbler?</h4>
                <Link to="/signup">
                    <button className="btn btn-primary">Sign up here</button>
                </Link>
            </header>

            <div className="container mt-3 p-0" id="timelinenouser-container">
                <div className="row">
                    <div className="col-sm-12 col-md-7" id="timelinenouser-message-list">
                        <h3>Latest on Warbler</h3>
                        <ul className="list-group" id="timelinenouser-messages">
                            {
                                !messagesIsLoading
                                    ? messages.map(m => (
                                        <MessageItem
                                            key={m._id}
                                            date={m.createAt}
                                            text={m.text}
                                            username={m.user.username}
                                            messageID={m._id}
                                            authorID={m.user._id}
                                            profileImageUrl={m.user.profilePicture}
                                        />
                                    ))
                                    : <Loader />
                            }
                        </ul>

                        {
                            !discoverPeopleIsLoading
                                ? <OwlCarousel
                                    className="owl-theme"
                                    loop
                                    autoPlay
                                    autoplayTimeout={1500}
                                    margin={10}
                                    nav
                                >
                                    {
                                        discoverPeople.map((people, ind) => (
                                            <DiscoverPeopleItem
                                                key={ind}
                                                username={people.username}
                                                profilePicture={people.profilePicture}
                                                _id={people._id}
                                            />
                                        ))
                                    }
                                </OwlCarousel>
                                : <Loader />
                        }

                    </div>

                    <div className="col-sm-12 col-md-5" id="timelinenouser-news-list">
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
                    </div>

                </div>
            </div>

        </React.Fragment>
    );

};

export default TimelineNoUser;
