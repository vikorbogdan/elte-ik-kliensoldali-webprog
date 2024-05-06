import { useDispatch, useSelector } from "react-redux";
import { clickCell, colors, selectTable } from "../../store/nonogramSlice/nonogramSlice";

export const GraphiLogics = () => {
  const { upperNumbers, table, leftNumbers, solution, isSolutionChecked } = useSelector(selectTable);
  const dispatch = useDispatch();
  const getResults = (value, solution) => {
    if (
      isSolutionChecked &&
      ((value === colors.BLACK && solution === false) || (value === colors.GREY && solution === true))
    ) {
      return false;
    }
    return true;
  };
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
                      {row.map((cell, cellIdx) => (
                        <span key={cellIdx}>{cell}</span>
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
                        className={
                          getResults(cell, solution[rowIdx][cellIdx])
                            ? cell === colors.WHITE
                              ? "feher"
                              : cell === colors.BLACK
                              ? "fekete"
                              : cell === colors.GREY
                              ? "szurke"
                              : ""
                            : "piros"
                        }
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
