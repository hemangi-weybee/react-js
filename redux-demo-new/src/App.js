import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import PostList from "./components/PostList";
import reducers from './reducers';


const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="ui container">
        <PostList />
      </div>
    </Provider>
  );
};

export default App;