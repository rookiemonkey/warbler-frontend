import React from 'react';
import Moment from 'react-moment';
import setDefaultImage from '../../helpers/setDefaultImage';

const NewsItem = props => {

    const { source, title, description, url, urlToImage, publishedAt } = props;
    const { name: news_source } = source;

    return (

        <div id="message-item-container">

            <a href={url} rel="noopener noreferrer">
                <li className="list-group-item" id="message-item">

                    <img
                        className="timeline-image"
                        src={urlToImage}
                        alt={title}
                        height='100px'
                        width='100px'
                        onError={setDefaultImage}
                    />

                    <div className="message-area">

                        <span className="text-muted">
                            <Moment
                                className="text-muted"
                                format='Do MMM YYYY'
                            >{publishedAt}</Moment>

                        by: {news_source}
                        </span>

                        <p>{description}</p>

                    </div>

                </li>
            </a>

        </div >
    )
}

export default NewsItem;