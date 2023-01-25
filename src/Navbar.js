import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ history, setHistory, size, setSize }) {
  const [dark, setDark] = useState(false);

  return (
    <nav className={"navbar " + (dark ? "dark" : "")}>
      <label>Размер сетки</label>
      <input
        type="number"
        className="size-input"
        disabled={history.length > 0}
        value={size}
        onChange={(e) => setSize(Math.max(2, e.target.value))}
      />
      <button className="button" onClick={() => setDark((d) => !d)}>
        {dark ? "Светлая тема" : "Темная тема"}
      </button>
      {Boolean(history.length) && (
        <button className="button" onClick={() => setHistory([])}>
          Очистить
        </button>
      )}
    </nav>
  );
}
