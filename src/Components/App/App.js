import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      searchResults: [
        {name: 'song1', artist: 'artist1', album: 'album1', id: 1}, 
        {name: 'song2', artist: 'artist2', album: 'album2', id: 2}, 
        {name: 'song3', artist: 'artist3', album: 'album3', id: 3}
      ],
      playlistName: `Uri's playlist`,
      playlistTracks: [
        {name: 'psong1', artist: 'partist1', album: 'palbum1', id: 1}, 
        {name: 'psong2', artist: 'partist2', album: 'palbum2', id: 2}, 
        {name: 'psong3', artist: 'partist3', album: 'palbum3', id: 3}
      ]
    };
  };

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  };
};