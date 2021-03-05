import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {useDataLayerValue} from './DataLayer';


const spotify = new SpotifyWebApi();


function App() {
  const [{user, token}, dispatch] = useDataLayerValue();


  //Run code base on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash ="";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      });
      
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }

    console.log("I HAVE A TOKEN >>>", token);
  },[]);

  console.log("smile",user);
  console.log("alien",token);

  return (
    //BEM
    <div className="app">
      {
        token ? (
            <Player/>
        ) : (
            <Login/>
        )
    }
    </div>
  );
}

export default App;
