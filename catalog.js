const catalogContainer = document.querySelector(".catalog_dynamic");

function renderCatalog(data) {
    catalogContainer.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p class="price">${item.price} грн</p>
            <button>В кошик</button>
        `;

        catalogContainer.appendChild(card);
    });
}
