import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.state = { 
      searchResults: [
        {name: 'song1', artist: 'artist1', album: 'album1', id: 1}, 
        {name: 'song2', artist: 'artist2', album: 'album2', id: 2}, 
        {name: 'song3', artist: 'artist3', album: 'album3', id: 3}
      ],
      playlistName: `Uri's playlist`,
      playlistTracks: [
        {name: 'psong1', artist: 'partist1', album: 'palbum1', id: 4}, 
        {name: 'psong2', artist: 'partist2', album: 'palbum2', id: 5}, 
        {name: 'psong3', artist: 'partist3', album: 'palbum3', id: 6}
      ]
    };
  };

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    } else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  };

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      let trackIndex = tracks.indexOf(track);
      tracks.splice(trackIndex, 1);
      this.setState({ playlistTracks: tracks });
    } else {
      return;
    }
  };

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  };
};