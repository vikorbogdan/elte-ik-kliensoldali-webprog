// Rendezhető táblázat Adott egy táblázat az oldalon. JavaScript segítségével tedd lehetővé, hogy az oszlopok fejlécére kattintva a táblázat az adott oszlop szerint rendezve jelenjen meg!
// const table = document.querySelector("table");
class SortableTable {
  constructor(table) {
    this.tbody = table.querySelector("tbody");
    this.tableRows = this.tbody.querySelectorAll("tr");
    this.data = [...this.tableRows].map((tr) =>
      [...tr.querySelectorAll("td")].map((td) => td.innerText)
    );
    table.addEventListener("click", (e) => {
      if (e.target.matches("thead th")) {
        const columnIndex = e.target.cellIndex;
        this.data.sort((a, b) => (a[columnIndex] < b[columnIndex] ? -1 : 1));
        this.tbody.innerHTML = this.renderTableBody();
      }
    });
  }
  renderTableBody = () => {
    return this.data
      .map(
        (row) => `
    <tr>
        ${row
          .map(
            (data) => `
        <td>
            ${data}
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

let table1 = new SortableTable(document.querySelector("#table1"));
let table2 = new SortableTable(document.querySelector("#table2"));
