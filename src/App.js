import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import GifList from './components/GifList';
import data from './data/gifs';
import GifForm from './components/GifForm';

function App() {
  const gifs = data;
  const loading = false;
  const error = '';

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm />

      {
        loading ? <h3>We are loading</h3> : <GifList gifs={gifs} />
      }  

    </div>
  );
}

export default App;