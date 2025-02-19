const tableElement = document.querySelector("table");
const tableBodyElement = tableElement.querySelector("tbody");
const tableHeaderElement = tableElement.querySelector("thead");

const tableData = [...tableBodyElement.querySelectorAll("tr")]
.map(row => [...row.querySelectorAll("td")]
.map(cell => cell.innerText))

tableHeaderElement.style.cursor = "pointer";

function onHeaderClick(event) {
    const headerCellElement = event.target.closest("th");
    const headerCellIndex = headerCellElement.cellIndex

    tableData.sort((a,b) => a[headerCellIndex].localeCompare(b[headerCellIndex]));

    tableBodyElement.innerHTML = `
        ${tableData.map(row => `
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

tableHeaderElement.addEventListener("click",onHeaderClick)