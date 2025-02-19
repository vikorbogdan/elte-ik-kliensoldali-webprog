class SortableTable {
    constructor(tableElement){
        this.tableBodyElement = tableElement.querySelector("tbody");
        this.tableHeaderElement = tableElement.querySelector("thead");
        
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

const table1 = new SortableTable(document.querySelector("#elso"))
const table2 = new SortableTable(document.querySelector("#masodik"))