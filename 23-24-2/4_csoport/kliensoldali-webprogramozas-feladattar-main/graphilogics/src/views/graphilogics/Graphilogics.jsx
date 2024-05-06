import { useDispatch, useSelector } from "react-redux";
import { clickCell, colors, selectTable } from "../../store/nonogram/nonogramSlice";

export const GraphiLogics = () => {
  const dispatch = useDispatch();
  const { table, upperNumbers, leftNumbers } = useSelector(selectTable);
  return (
    <table id="layout">
      <tbody>
        <tr>
          <td></td>
          <td>
            <table id="felso">
              <tbody>
                <tr>
                  {upperNumbers.map((row, rowIdx) => (
                    <td key={rowIdx}>
                      {row.map((number, numberIdx) => (
                        <span key={numberIdx}>{number}</span>
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
                      {row.map((number, numberIdx) => (
                        <span key={numberIdx}>{number}</span>
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
                        key={cellIdx}
                        className={
                          cell === colors.WHITE
                            ? "feher"
                            : cell === colors.BLACK
                            ? "fekete"
                            : cell === colors.GREY
                            ? "szurke"
                            : ""
                        }
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
