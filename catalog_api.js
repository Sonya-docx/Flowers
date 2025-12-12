async function loadBouquets() {
    try {
        const response = await fetch(
            "https://api.jsonbin.io/v3/b/693c9c1843b1c97be9ea339b/latest"
        );

        const data = await response.json();

        console.log("Отримано:", data);

        // ДУЖЕ ВАЖЛИВО → у JSONBin дані лежать у data.record
        renderCatalog(data.record);

    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}

loadBouquets();
