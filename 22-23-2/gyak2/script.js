// Rendezhető táblázat Adott egy táblázat az oldalon. JavaScript segítségével tedd lehetővé, hogy az oszlopok fejlécére kattintva a táblázat az adott oszlop szerint rendezve jelenjen meg!
// const table = document.querySelector("table");
class SortableTable extends HTMLTableElement {
  constructor() {
    super();
    console.log(this)
    // this.table = this.querySelector('table');
    this.tbody = this.querySelector("tbody");
    this.tableRows = this.tbody.querySelectorAll("tr");

   // this.attachShadow({mode:"open"});
   // this.shadowRoot.appendChild(this.table);

    // this.styling = document.createElement("style");
   /* this.styling.innerText = 
    `
    table{
      background-color: rebeccapurple;
      color: ivory;
    }
    thead{
      background-color: lightseagreen;
      color: black;
      cursor: pointer;
    }
    th:hover{
      transform: scale(105%)
    }
    `
    this.shadowRoot.appendChild(this.styling);
*/

    this.data = [...this.tableRows].map((tr) =>
      [...tr.querySelectorAll("td")].map((td) => td.innerText)
    );
    this.addEventListener("click", this.onClick);
  }

  onClick = (e) => {
  if (e.target.matches("thead th")) {
    const columnIndex = e.target.cellIndex;
    this.data.sort((a, b) => (a[columnIndex] < b[columnIndex] ? -1 : 1));
    this.tbody.innerHTML = this.renderTableBody();
  }
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
customElements.define("sortable-table", SortableTable, {extends: "table"})
// let table1 = new SortableTable(document.querySelector("#table1"));
// let table2 = new SortableTable(document.querySelector("#table2"));
