import React, { Component } from 'react';
import VideoCard from './VideoCard';
import FilterList from './FilterList';
import * as Ids from './ChannelIds';


const VideoList = (props) => {
    const { FilteredChannels, changeFilteredChannels, Videos, NumberOfVideos} = props;
    return (
        <div>
            <div>
                {FilteredChannels.map(({ id, checked }) =>
                    checked ?
                        <span key={id} value={id} onClick={() => changeFilteredChannels(id)} >{id}</span> :
                        <span key={id} style={{ textDecoration: 'line-through' }} value={id} onClick={() => changeFilteredChannels(id)} >{id}</span>
                )}
            </div>
            {Videos.map((video) => <VideoCard key={video.id.videoId} video={video} />)}
            {NumberOfVideos}
        </div>
    )
}

export default VideoList;