// import React from "react";
import Header from "./Components/Header";
import Scoreboard from "./Components/Scoreboard";

function App() {
  return (
      <div>
        {/* All components go */}
        <Header/>
        <div id="score_page">
            <Scoreboard className="score_board_l" />
            <Scoreboard className="score_board_r" />
        </div>
      </div>
  )
}

export default App
