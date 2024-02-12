import { useDispatch, useSelector } from "react-redux";
import { clickCell, colors } from "../../state/graphilogics/graphilogicsSlice";
const selectTable = (state) => {
  const { solution, table, solutionChecked } = state.graphilogics;
  return { solution, table, solutionChecked };
};

export const GraphiLogics = () => {
  const { solution, solutionChecked, table } = useSelector(selectTable);
  const getResults = (value, solution) => {
    console.log(solutionChecked);
    if (
      solutionChecked &&
      ((value === colors.BLACK && solution === false) || (value === colors.GREY && solution === true))
    ) {
      return false;
    }
    return true;
  };
  const dispatch = useDispatch();
  const leftNumbers = solution.map((row) =>
    row
      .map((b) => (b ? "#" : " "))
      .join("")
      .trim()
      .split(" ")
      .map((s) => s.length)
      .filter(Boolean)
  );
  const upperNumbers = solution[0]
    ? solution[0].map((_, i) =>
        solution
          .map((row) => (row[i] ? "#" : " "))
          .join("")
          .trim()
          .split(" ")
          .map((s) => s.length)
          .filter(Boolean)
      )
    : [];
  return (
    <table id="layout">
      <tbody>
        <tr>
          <td></td>
          <td>
            <table id="felso">
              <tbody>
                <tr>
                  {upperNumbers.map((col, colIdx) => (
                    <td key={colIdx}>
                      {col.map((num, numIdx) => (
                        <span key={numIdx}>{num}</span>
                      ))}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table id="bal">
              <tbody>
                {leftNumbers.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    <td>
                      {row.map((num, numIdx) => (
                        <span key={numIdx}>{num}</span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
          <td>
            <table id="tabla">
              <tbody>
                {table.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    {row.map((cell, cellIdx) => (
                      <td
                        onClick={() => dispatch(clickCell({ x: rowIdx, y: cellIdx }))}
                        className={`
                            ${
                              getResults(cell, solution[rowIdx][cellIdx])
                                ? cell === colors.WHITE
                                  ? "feher"
                                  : cell === colors.BLACK
                                  ? "fekete"
                                  : cell === colors.GREY
                                  ? "szurke"
                                  : ""
                                : "rossz"
                            }
                            `}
                        key={cellIdx}
                      ></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
