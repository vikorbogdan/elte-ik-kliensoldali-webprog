class SortableTable extends HTMLTableElement {
    constructor(){
        super();
        this.tableBodyElement = this.querySelector("tbody");
        this.tableHeaderElement = this.querySelector("thead");
        
        this.tableData = [...this.tableBodyElement.querySelectorAll("tr")]
        .map(row => [...row.querySelectorAll("td")]
        .map(cell => cell.innerText))
        
        this.tableHeaderElement.style.cursor = "pointer";
        this.tableHeaderElement.addEventListener("click",this.onHeaderClick)
    }


onHeaderClick = (event) => {
    const headerCellElement = event.target.closest("th");
    const headerCellIndex = headerCellElement.cellIndex

    this.tableData.sort((a,b) => a[headerCellIndex].localeCompare(b[headerCellIndex]));

    this.tableBodyElement.innerHTML = `
        ${this.tableData.map(row => `
            <tr>
                ${row.map(cell => `
                    <td>
                        ${cell}
                    </td>
                `).join("")}
            </tr>
            `).join("")}
    `
}
}
customElements.define("sortable-table", SortableTable, {extends: "table"})