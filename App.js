import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Chat Component */}
          <Chat />
        </div>
    </div>
  );
}

export default App;
