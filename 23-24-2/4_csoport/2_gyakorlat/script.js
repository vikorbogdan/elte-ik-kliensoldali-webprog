class SortableTable extends HTMLTableElement {
  constructor(tableId) {
    super();
    console.log(this);
    // this.tableElement = document.querySelector(`#${tableId}`);
    this.tableBodyElement = this.querySelector("tbody");
    this.tableHeaderElement = this.querySelector("thead");

    this.tableBodyData = [...this.tableBodyElement.querySelectorAll("tr")].map(
      (row) => [...row.querySelectorAll("td")].map((cell) => cell.innerText)
    );
    this.tableHeaderElement.style.cursor = "pointer";
    this.tableHeaderElement.addEventListener("click", this.onClick);
  }
  onClick = (event) => {
    const headerCellElement = event.target.closest("th");
    const headerElementIndex = headerCellElement.cellIndex;

    this.tableBodyData.sort((a, b) =>
      a[headerElementIndex].localeCompare(b[headerElementIndex])
    );

    this.tableBodyElement.innerHTML = this.renderTableBody();
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

customElements.define("sortable-table", SortableTable, { extends: "table" });
