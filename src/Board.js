import { useState, useMemo, useEffect } from "react";
import Square from "./Square";
import { nextMove, checkWinner } from "./methods";
import "./Board.css";

export default function Board({ size, history, setHistory }) {
  const a = Array.from({ length: size });

  const [winner, setWinner] = useState(false);
  const historyDict = useMemo(() => Object.fromEntries(history), [history]);
  const currentMove = useMemo(() => {
    const next = nextMove(history.at(-1)?.[1]);
    return winner ? nextMove(next) : next;
  }, [winner, history]);
  const title = useMemo(
    () => `${winner ? "Победитель" : "Ход"} ${currentMove}`,
    [winner, currentMove]
  );

  useEffect(() => {
    setWinner(checkWinner(size, history));
  }, [size, history]);

  function onClick(key) {
    return !winner && (() => setHistory((his) => [...his, [key, currentMove]]));
  }

  return (
    <section>
      <h3 className="title">{title}</h3>
      <article className="board">
        {a.map((_, x) => (
          <div key={x} className="row">
            {a.map((_, y) => {
              const key = `${x}:${y}`;
              return (
                <Square
                  key={key}
                  value={historyDict[key]}
                  onClick={onClick(key)}
                />
              );
            })}
          </div>
        ))}
      </article>
    </section>
  );
}
