import arrowDown from "../img/arrow-down.png";
import arrowUp from "../img/arrow-up.png";

const data = [
    {
        id: 26,
        title: "Побег из Шоушенка",
        imdb: 9.30,
        year: 1994,
    },
    {
        id: 25,
        title: "Крёстный отец",
        imdb: 9.20,
        year: 1972,
    },
    {
        id: 27,
        title: "Крёстный отец 2",
        imdb: 9.00,
        year: 1974,
    },
    {
        id: 1047,
        title: "Тёмный рыцарь",
        imdb: 9.00,
        year: 2008,
    },
    {
        id: 223,
        title: "Криминальное чтиво",
        imdb: 8.90,
        year: 1994,
    },
];

const container = document.querySelector(".table-container");
const table = document.createElement("table");
container.append(table);

const tableHead = document.createElement("thead");
table.append(tableHead);
const tableHeadRow = document.createElement("tr");
tableHeadRow.innerHTML = `
  <th scope="col" class="head-title">id</th>
  <th scope="col" class="head-title">title</th>
  <th scope="col"class="head-title">year</th>
  <th scope="col"class="head-title">imdb</th>
`;
tableHead.append(tableHeadRow);

for (let movie of data) {
    const movieTr = document.createElement("tr");
    movieTr.classList.add("movie-row");
    movieTr.dataset.id = movie.id;
    movieTr.dataset.title = movie.title;
    movieTr.dataset.year = movie.year;
    movieTr.dataset.imdb = movie.imdb;
    movieTr.innerHTML = `
      <td>${movie.id}</td>
      <td>${movie.title}</td>
      <td>${movie.year}</td>
      <td>imdb: ${movie.imdb.toFixed(2)}</td>`;
    table.append(movieTr);
}

const headTitles = Array.from(document.querySelectorAll(".head-title"));
const movieRows = Array.from(document.querySelectorAll(".movie-row"));

function sortMovie(parameter, arrow, direction) {
    const table = document.querySelector("table");

    headTitles.forEach((title) => {
        const text = title.textContent.trim();
        title.innerHTML = text;
    });

    const index = headTitles.findIndex(
        (title) => title.textContent.trim() === parameter
    );
    headTitles[index].innerHTML = `
            ${parameter} <img src=${arrow} alt="arrow-down" class="arrow">
          `;

    const sortedArray = movieRows.sort((a, b) => {
        if (!isNaN(a.dataset[parameter]) && !isNaN(b.dataset[parameter])) {
            return direction === "descending"
                ? Number(a.dataset[parameter]) - Number(b.dataset[parameter])
                : Number(b.dataset[parameter]) - Number(a.dataset[parameter]);
        }
        return direction === "descending"
            ? a.dataset[parameter].localeCompare(b.dataset[parameter], "ru")
            : b.dataset[parameter].localeCompare(a.dataset[parameter], "ru");
    });

    sortedArray.forEach((row) => table.append(row));
}

function runTimeouts() { 
    setTimeout(() => sortMovie("id", arrowDown, "descending"), 2000);
    setTimeout(() => sortMovie("id", arrowUp, "ascending"), 4000);
    setTimeout(() => sortMovie("title", arrowDown, "descending"), 6000);
    setTimeout(() => sortMovie("title", arrowUp, "ascending"), 8000);
    setTimeout(() => sortMovie("year", arrowDown, "descending"), 10000);
    setTimeout(() => sortMovie("year", arrowUp, "ascending"), 12000);
    setTimeout(() => sortMovie("imdb", arrowDown, "descending"), 14000);
    setTimeout(() => sortMovie("imdb", arrowUp, "ascending"), 16000);

    setTimeout(runTimeouts, 16000 + 2000);
}

runTimeouts();