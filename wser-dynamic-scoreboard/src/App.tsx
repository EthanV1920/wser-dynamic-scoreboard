// import React from "react";
import Header from "./Components/Header";
import Scoreboard from "./Components/Scoreboard";

function App() {
  return (
      <div>
        {/* All components go */}
        <Header/>
        <div id="score_con">
            <Scoreboard/>
            <Scoreboard/>
        </div>
      </div>
  )
}

export default App
