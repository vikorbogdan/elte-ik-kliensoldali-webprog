class SortableTable {
  constructor(tableId) {
    this.tableElement = document.querySelector(`#${tableId}`);
    this.tableBodyElement = this.tableElement.querySelector("tbody");
    this.tableHeaderElement = this.tableElement.querySelector("thead");
    this.tableBodyData = [...this.tableBodyElement.querySelectorAll("tr")].map(
      (trElement) =>
        [...trElement.querySelectorAll("td")].map(
          (tdElement) => tdElement.innerText
        )
    );

    this.sortTableBody(0);
    this.tableBodyElement.innerHTML = this.renderTableBody();

    this.tableHeaderElement.style.cursor = "pointer";

    this.tableHeaderElement.addEventListener("click", (event) => {
      const headerCellElement = event.target.closest("th");
      const headerCellIndex = headerCellElement.cellIndex;
      this.tableBodyData.sort(this.sortTableBody(headerCellIndex));
      this.tableBodyElement.innerHTML = this.renderTableBody();
    });
  }

  sortTableBody = (cellIndex) => {
    return (a, b) => a[cellIndex].localeCompare(b[cellIndex]);
  };
  renderTableBody = () => {
    return this.tableBodyData
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
  };
}

new SortableTable("table1");
new SortableTable("table2");
