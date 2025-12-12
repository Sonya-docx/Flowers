async function loadBouquets() {
    try {
        const response = await fetch("data.json");

        const data = await response.json();

        console.log("Отримано:", data);

        // ДУЖЕ ВАЖЛИВО → у JSONBin дані лежать у data.record
        renderCatalog(data.record);

    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}

loadBouquets();
