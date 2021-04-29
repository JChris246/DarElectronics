const createRow = (items) => {
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("row", "text-center", "pl-3");

    items.forEach(i => {
        let itemContainer = document.createElement("div");
        itemContainer.classList.add("col", "col-md-4", "pl-md-2");
        let innerContainer = document.createElement("div");
        innerContainer.classList.add("card", "product_item");

        let img = document.createElement("img");
        img.src = "imgs/" + i.pic;
        img.alt = i.name;
        img.classList.add("card-img-top");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let link = document.createElement("a");
        link.href = "#";
        link.innerHTML = "<h4>" + i.name + "</h4>";

        let price = document.createElement("h5");
        price.innerText = "$" + i.price;

        let avaliable = document.createElement("p");
        avaliable.classList.add("alert-" + i.avaliable ? "success" : "danger");

        cardBody.appendChild(link);
        cardBody.appendChild(price);
        cardBody.appendChild(avaliable);

        innerContainer.appendChild(img);
        innerContainer.appendChild(cardBody);

        itemContainer.appendChild(innerContainer);

        rowContainer.appendChild(itemContainer);
    });

    return rowContainer;
}

const removeResults = () => {
    let results = document.getElementById("results");
    let pagination = document.getElementById("pagination");
    let sort = document.getElementById("sort");
    while (results.firstChild)
        results.removeChild(results.firstChild);
    results.appendChild(sort);
    results.appendChild(pagination);
}

const displayCat = (category) => {
    removeResults();
    let results = document.getElementById("results");
    for(let i = 0; i < products[category].length; i+=3) {
        let send = [];
        send.push(products[category][i])
        if (i+1 < products[category].length)
            send.push(products[category][i+1])
        if (i+2 < products[category].length)
            send.push(products[category][i+2])
        results.insertBefore(createRow(send), document.getElementById("pagination"));
    }
}

const displayRandomAll = () => {
    removeResults();
    let results = document.getElementById("results");
    let row = createRow([products.laptops[0], products.laptops[1],products.phones[0]]);
    results.insertBefore(row, document.getElementById("pagination"));
    row = createRow([products.tvs[0], products.tablets[0],products.headphones[0]]);
    results.insertBefore(row, document.getElementById("pagination"));
    row = createRow([products.cables[0], products.misc[0],products.misc[1]]);
    results.insertBefore(row, document.getElementById("pagination"));
}