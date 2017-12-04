import React from 'react';
import getTimePassed from './../Shared/TimeConstants';

const VideoCard = (props) => {
    let timePassed = getTimePassed(props.video.snippet.publishedAt);
    return (<div>
        <h3>{props.video.snippet.title}</h3>
        <a href={`http://youtube.com/channel/${props.video.snippet.channelId}`}>{props.video.snippet.channelTitle}</a><br />
        <a href={`http://youtube.com/watch?v=${props.video.id.videoId}`}>
            <img src={props.video.snippet.thumbnails.medium.url} alt="" width={props.video.snippet.thumbnails.medium.width} />
        </a><br />
        <small>{timePassed.toString()}</small><br />
        <small>id: {props.video.id.videoId}</small>
    </div>
    );
}


export default VideoCard;