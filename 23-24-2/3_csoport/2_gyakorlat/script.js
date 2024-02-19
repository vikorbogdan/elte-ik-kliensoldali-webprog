const sortableTable = (tableId) => {
  // Elemek kiválasztása
  const tableElement = document.querySelector(`#${tableId}`);
  const tableBodyElement = tableElement.querySelector("tbody");
  const tableHeaderElement = tableElement.querySelector("thead");

  const tableBodyData = [...tableBodyElement.querySelectorAll("tr")].map(
    (trElement) =>
      [...trElement.querySelectorAll("td")].map(
        (tdElement) => tdElement.innerText
      )
  );

  tableBodyData.sort((a, b) => a[0].localeCompare(b[0]));

  tableBodyElement.innerHTML = tableBodyData
    .map(
      (row) => `
    <tr>
        ${row
          .map(
            (cell) => `
        <td>
            ${cell}
        </td>
        `
          )
          .join("")}
    </tr>
`
    )
    .join("");

  tableHeaderElement.style.cursor = "pointer";

  tableHeaderElement.addEventListener("click", (event) => {
    const headerCellElement = event.target.closest("th");
    const headerCellIndex = headerCellElement.cellIndex;
    tableBodyData.sort((a, b) =>
      a[headerCellIndex].localeCompare(b[headerCellIndex])
    );
    tableBodyElement.innerHTML = tableBodyData
      .map(
        (row) => `
    <tr>
        ${row
          .map(
            (cell) => `
        <td>
            ${cell}
        </td>
        `
          )
          .join("")}
    </tr>
`
      )
      .join("");
  });
};

sortableTable("table1");
sortableTable("table2");
