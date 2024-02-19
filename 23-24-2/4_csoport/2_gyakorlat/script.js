const tableElement = document.querySelector("table");
const tableBodyElement = tableElement.querySelector("tbody");
const tableHeaderElement = tableElement.querySelector("thead");

const tableBodyData = [...tableBodyElement.querySelectorAll("tr")].map((row) =>
  [...row.querySelectorAll("td")].map((cell) => cell.innerText)
);

tableHeaderElement.style.cursor = "pointer";

tableHeaderElement.addEventListener("click", (event) => {
  const headerCellElement = event.target.closest("th");
  const headerElementIndex = headerCellElement.cellIndex;

  tableBodyData.sort((a, b) =>
    a[headerElementIndex].localeCompare(b[headerElementIndex])
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
