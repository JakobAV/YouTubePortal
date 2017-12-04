import React, { Component } from 'react';
import VideoCard from './VideoCard';
import FilterList from './FilterList';
import * as Ids from './ChannelIds';
import VideoList from './VideoList';
const apiKey = 'AIzaSyBrht0Z_V79bNxdrdivhjKss8eAOGXAdfE';

function getVideos(filteredChannels) {
    return new Promise((resolve, reject) => {
        let result = {
            NumberOfVides: 0,
            Videos: []
        };
        let requestsDone = 0;
        let channelsToSeach = filteredChannels.filter(x => x.checked);
        if(channelsToSeach.length === 0){
            resolve(result);
        }
        channelsToSeach.forEach(({id}) => {
            fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&order=date&part=snippet&type=video&channelId=${Ids[id]}`)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    Object.assign(result, {
                        NumberOfVideos: result.NumberOfVideos+json.items.length,
                        Videos: [...result.Videos,...json.items]
                    })
                }).then(() => {
                    requestsDone++;
                    if(requestsDone >= channelsToSeach.length){
                        result.Videos.sort((a, b) => new Date(b.snippet.publishedAt)-new Date(a.snippet.publishedAt));
                        resolve(result);
                    }
                });
        });
    });
    
}

class Container extends Component {
    defaultState = {
        FilteredChannels: [...Ids.default],
        Videos: [],
        NumberOfVideos: 0,
    }
    constructor(props) {
        super(props);
        console.log(this.defaultState.FilteredChannels);
        this.state = this.defaultState;
        getVideos(this.state.FilteredChannels).then((data) => {this.setState({Videos: data.Videos, NumberOfVideos: data.NumberOfVideos})});
    }
    changeFilteredChannels(id) {
        let fc = this.state.FilteredChannels;
        let channel = fc.find(x => x.id === id);
        channel.checked = !channel.checked;
        this.setState({ FilteredChannels: fc });
        getVideos(fc).then((data) => {this.setState({Videos: data.Videos, NumberOfVideos: data.NumberOfVideos})});
    }

    render() {
        return (
            <div>
                <VideoList FilteredChannels={this.state.FilteredChannels} Videos={this.state.Videos}  changeFilteredChannels={(id) => this.changeFilteredChannels(id)}/>
            </div>
        );
    }
}

export default Container;