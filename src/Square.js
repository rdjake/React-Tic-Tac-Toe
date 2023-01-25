import "./Square.css";

export default function Square({ value, onClick }) {
  return (
    <button
      className={"square" + (value ? " filled" : "")}
      onClick={() => {
        !value && onClick && onClick();
      }}
    >
      {value ?? ":)"}
    </button>
  );
}
