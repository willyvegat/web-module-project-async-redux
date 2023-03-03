import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { useEffect } from 'react';

import { isFetching, fetchSuccess } from './actions/index';

import GifList from './components/GifList';
import GifForm from './components/GifForm';

import axios from 'axios';

function App(props) {
  const { loading, error, isFetching, fetchSuccess } = props;
  // const gifs = data;
  // const loading = false;
  // const error = '';

  // console.log(props);

  useEffect(() => {
    // console.log("is fetching");
    isFetching();
    axios.get("https://api.giphy.com/v1/gifs/search?api_key=F9yz06P5ZP1n53kabNVkRfXQb9WusH4a&q=monkeys")
      .then(res => {
        console.log(res);
        fetchSuccess(res.data.data)
      })
      .catch(err => console.error("there is an error"))
  }, [])

  return (
    <div className="App">
      <h1>Search for Gifs</h1>``
      <GifForm />
      {
        (error !== "") && <h3>{error}</h3>
      }``

      {
        loading ? <h3>We are loading</h3> : <GifList />
      }  

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

// const mapActionsToProps = () => {
//   return {
//     isFetching: isFetching
//   }
// }
// export default connect(mapStateToProps, mapActionsToProps())(App);

export default connect(mapStateToProps, { isFetching, fetchSuccess })(App);