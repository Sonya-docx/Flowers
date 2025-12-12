async function loadBouquets() {
    try {
        const response = await fetch("https://api.jsonbin.io/v3/b/693c9619ae596e708f95ea86"); 
        const data = await response.json();
        renderCatalog(data.record);
    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}

loadBouquets();
