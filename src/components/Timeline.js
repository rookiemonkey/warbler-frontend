import React from 'react';
import TimelineAside from './mini/TimelineAside';
import TimelineMessages from './mini/TimelineMessages';

const Timeline = () => {

    return (
        <div className="row" id="timeline-container">

            <TimelineAside />

            <TimelineMessages />

        </div>
    )
}

export default Timeline;