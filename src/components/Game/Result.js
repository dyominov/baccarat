import React, { useState } from "react";
import "./Over.css";
import Over from "./Over";
import Score from "./Score";
import Handicape from "./Handicape";

const Result = props => {
  const [totalScore, setTotalScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [handicape, setHandicape] = useState(0);

  return (
    <div>
      <div className="input">
        <h1>Get Result</h1>
        <form>
          <label>
            Home score:
            <select
              value={homeScore}
              onChange={e => setHomeScore(e.target.value)}
            >
              <option value="8.5">8.5</option>
              <option value="7.5">7.5</option>
              <option value="6.5">6.5</option>
              <option value="5.5">5.5</option>
              <option value="4.5">4.5</option>
              <option value="3.5">3.5</option>
              <option value="2.5">2.5</option>
              <option value="1.5">1.5</option>
              <option value="0.5">0.5</option>
            </select>
          </label>
        </form>
        <form>
          <label>
            Away score:
            <select
              value={awayScore}
              onChange={e => setAwayScore(e.target.value)}
            >
              <option value="8.5">8.5</option>
              <option value="7.5">7.5</option>
              <option value="6.5">6.5</option>
              <option value="5.5">5.5</option>
              <option value="4.5">4.5</option>
              <option value="3.5">3.5</option>
              <option value="2.5">2.5</option>
              <option value="1.5">1.5</option>
              <option value="0.5">0.5</option>
            </select>
            <p />
            Handicap:
            <select
              value={handicape}
              onChange={e => setHandicape(e.target.value)}
            >
              <option value="-8.5">-8.5</option>
              <option value="-7.5">-7.5</option>
              <option value="-6.5">-6.5</option>
              <option value="-5.5">-5.5</option>
              <option value="-4.5">-4.5</option>
              <option value="-3.5">-3.5</option>
              <option value="-2.5">-2.5</option>
              <option value="-1.5">-1.5</option>
              <option value="-0.5">-0.5</option>
              <option value="0">0</option>
              <option value="+0.5">+0.5</option>
              <option value="+1.5">+1.5</option>
              <option value="+2.5">+2.5</option>
              <option value="+3.5">+3.5</option>
              <option value="+4.5">+4.5</option>
              <option value="+5.5">+5.5</option>
              <option value="+6.5">+6.5</option>
              <option value="+7.5">+7.5</option>
              <option value="+8.5">+8.5</option>
            </select>
            <p />
            Total score:
            <select
              value={totalScore}
              onChange={e => setTotalScore(e.target.value)}
            >
              <option value="17.5">17.5</option>
              <option value="16.5">16.5</option>
              <option value="15.5">15.5</option>
              <option value="14.5">15.5</option>
              <option value="13.5">13.5</option>
              <option value="12.5">12.5</option>
              <option value="11.5">11.5</option>
              <option value="10.5">10.5</option>
              <option value="9.5">9.5</option>
              <option value="8.5">8.5</option>
              <option value="7.5">7.5</option>
              <option value="6.5">6.5</option>
              <option value="5.5">5.5</option>
              <option value="4.5">4.5</option>
              <option value="3.5">3.5</option>
              <option value="2.5">2.5</option>
              <option value="1.5">1.5</option>
              <option value="0.5">0.5</option>
            </select>
          </label>
        </form>

        <button
          onClick={() =>
            props.getResult({
              totalScore,
              homeScore,
              awayScore,
              handicape
            })
          }
        >
          check game
        </button>
        <p />
      </div>
      <div className="score">
        <Score percent={props.games.percentHome} />
        <Score percent={props.games.percentAway} />
      </div>
      <div className="score">
        <Handicape handicape={handicape} percent={props.games.handicape} />
      </div>
      <p />
      <p />
      <div className="over">
        <Over totalScore={totalScore} score={props.games.averageTotal} />
      </div>
      {
        //setInterval(props.getResult({ homeTeam, awayTeam, totalScore, homeScore, awayScore, handicape }, 3000))
      }
    </div>
  );
};

export default Result;
