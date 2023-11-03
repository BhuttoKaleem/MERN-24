import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState(new Date());
  const [history, setHistory] = useState([]);
  return (
    <div>
      <div
        className="app"
        style={{ display: 'flex', backgroundColor: 'beige', fontSize: '30px' }}
      >
        <div>
          {history.map(function (historyItem) {
            return (
              <div key={historyItem}>
                <span className="time">
                  {historyItem.date.getHours()}:{historyItem.date.getMinutes()}:
                  {historyItem.date.getSeconds()}
                </span>
                <span style={{ margin: '10px', backgroundColor: 'lightblue' }}>
                  {historyItem.count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={function () {
          setNumber(number + 1);
          const oldHistory = [...history];
          oldHistory.push({ date: new Date(), count: number });
          setHistory(oldHistory);
        }}
      >
        {number}
      </button>
    </div>
  );
}
