
class SortableTable extends HTMLTableElement {

constructor(){
    super();
    this.tableBodyElement = this.querySelector("tbody");
    this.tableHeaderElement = this.querySelector("thead")
    this.tableData = [...this.tableBodyElement.querySelectorAll("tr")].map(tr => [...tr.querySelectorAll("td")].map(td => td.innerText))
    this.tableHeaderElement.style.cursor = "pointer";
    this.tableHeaderElement.addEventListener("click",this.onHeaderClick);
}


onHeaderClick = (event) => {
    const headerCellElement = event.target.closest("th")
    this.tableData.sort((a,b) => a[headerCellElement.cellIndex].localeCompare(b[headerCellElement.cellIndex]))
    this.tableBodyElement.innerHTML = this.tableData.map(row => `
    <tr>
        ${row.map(cell => `
            <td>
                ${cell}
            </td>
            `).join("")}
    </tr>
`).join("")

}

}

customElements.define("sortable-table", SortableTable, {
    extends: "table"
})