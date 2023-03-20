const template = document.querySelector("#blog-template");

const data = [
    {
        title: "Gyönyörű szettben jelent meg a híresség az Oscar-gálán",
        date : "2020-12-10",
        description: "Nagyon szép ruha volt!!!!!!!!!!!!!!!!!!"
    },
    {
        title: "MEg vok fázva",
        date : "2020-03-06",
        description: "Beteg vagyok :(((("
    },
    {
        title: "Lasagna recept",
        date : "2020-12-10",
        description: "foodpanda"
    },
]

data.forEach(elem =>{
    const clone = template.content.cloneNode(true);
    clone.querySelector('h2').innerText = elem.title;
    clone.querySelector('h3').innerText = elem.date;
    clone.querySelector('p').innerText = elem.description;
    const border = document.createElement("div");
    border.appendChild(clone);
    document.body.appendChild(border);
})
