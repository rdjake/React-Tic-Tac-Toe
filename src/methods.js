export function nextMove(move) {
  return !move ? "X" : move === "X" ? "O" : "X";
}

function checkAxisLines(history, size) {
  const stats = history.reduce((stats, [key, move]) => {
    const [x, y] = key.split(":");
    return {
      ...stats,
      [move + y]: (stats[move + y] ?? 0) + 1,
      [x + move]: (stats[x + move] ?? 0) + 1
    };
  }, {});

  for (const key in stats) {
    if (stats[key] === size) return true;
  }
  return false;
}

function checkLeftDiag(history, size) {
  const diag = history
    .filter(([key]) => {
      const [x, y] = key.split(":");
      return x === y;
    })
    .map(([, move]) => move);
  return diag.length === size && new Set(diag).size === 1;
}

function checkRightDiag(history, size) {
  const diag = history
    .filter(([key]) => {
      const [x, y] = key.split(":").map((x) => +x);
      return x + y === size - 1;
    })
    .map(([, move]) => move);
  return diag.length === size && new Set(diag).size === 1;
}

export function checkWinner(size, history) {
  return (
    history.length >= 2 * size - 1 &&
    (checkAxisLines(history, size) ||
      checkLeftDiag(history, size) ||
      checkRightDiag(history, size))
  );
}
