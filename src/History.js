import "./History.css";

export default function History({ history, onUndo }) {
  return (
    <ul className="history">
      <h3>История</h3>
      {history.map(([key, move], i) => (
        <li
          key={key}
          className="history-move"
          onClick={() => onUndo(i)}
        >{`${move} - ${key}`}</li>
      ))}
    </ul>
  );
}
