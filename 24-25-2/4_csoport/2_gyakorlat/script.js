
function sortableTable(elementId){

const tableElement = document.querySelector(`#${elementId}`);
const tableBodyElement = tableElement.querySelector("tbody");
const tableHeaderElement = tableElement.querySelector("thead")

const tableData = [...tableBodyElement.querySelectorAll("tr")].map(tr => [...tr.querySelectorAll("td")].map(td => td.innerText))

tableHeaderElement.style.cursor = "pointer";


function onHeaderClick(event){
    const headerCellElement = event.target.closest("th")

    tableData.sort((a,b) => a[headerCellElement.cellIndex].localeCompare(b[headerCellElement.cellIndex]))
tableBodyElement.innerHTML = tableData.map(row => `
    <tr>
        ${row.map(cell => `
            <td>
                ${cell}
            </td>
            `).join("")}
    </tr>
`).join("")

}

tableHeaderElement.addEventListener("click",onHeaderClick);
}

sortableTable("elso");
sortableTable("masodik");