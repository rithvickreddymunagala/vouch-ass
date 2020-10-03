import React from "react";
import TwitterLogin from "./components/TwitterLogin";
import io from "socket.io-client";
import "./App.css";
const API_URL = "http://www.twitter.com/";
const socket = io(API_URL);

function App() {
  console.log(API_URL);
  return (
    <div className="App">
      <header className="App-header">
        <TwitterLogin socket={socket} />
      </header>
    </div>
  );
}

export default App;
