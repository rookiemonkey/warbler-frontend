import React, { useCallback } from 'react';
import Moment from 'react-moment';
import defaultImage from '../../assets/images/default-news-picture.png';

const NewsItem = props => {

    const { source, title, description, url, urlToImage, publishedAt, label } = props;
    const { name: news_source } = source;

    const handleImageError = useCallback(event => {
        event.target.onerror = null;
        event.target.src = defaultImage;
    }, [])

    return (

        <div id="news-item-container">

            <a href={url} rel="noopener noreferrer" target="_blank">
                <li className="list-group-item" id="news-item">

                    {
                        label
                            ? <h4> {label} </h4>
                            : null
                    }

                    <img
                        className="news-item-image"
                        src={urlToImage ? urlToImage : defaultImage}
                        alt={title}
                        onError={handleImageError}
                    />

                    <div className="message-area mt-3">

                        <span className="text-muted">
                            <Moment
                                className="text-muted"
                                format='Do MMM YYYY'
                            >{publishedAt}</Moment>

                        &nbsp; by {news_source}
                        </span>

                        <p style={{ textAlign: "justify", marginBottom: '2px' }}>
                            <b>{title}</b>
                        </p>

                        <p style={{ textAlign: "justify" }}>{description}</p>

                    </div>

                </li>
            </a>

        </div >
    )
}

export default NewsItem;