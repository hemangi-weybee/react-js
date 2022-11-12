import React from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import SelectedSong from "./component/SelectedSong";
import SongList from "./component/SongList";
import reducers from './reducers'

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <div className="lists">
        <SongList />
        <SelectedSong />
      </div>
    </Provider>
  );
};

export default App;