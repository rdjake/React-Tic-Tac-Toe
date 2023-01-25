import { useState } from "react";
import Board from "./Board";
import Navbar from "./Navbar";
import History from "./History";

//history Map[[key,move]]
export default function App() {
  const [size, setSize] = useState(3);
  const [history, setHistory] = useState([]);

  return (
    <div>
      <Navbar
        size={size}
        history={history}
        setHistory={setHistory}
        setSize={setSize}
      />
      <main>
        <Board size={size} history={history} setHistory={setHistory} />
        <History
          history={history}
          onUndo={(ind) => setHistory((his) => his.slice(0, ind + 1))}
        />
      </main>
    </div>
  );
}
