async function loadBouquets() {
    try {
        const response = await fetch("data.json"); 
        const data = await response.json();
        renderCatalog(data);
    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}

loadBouquets();
