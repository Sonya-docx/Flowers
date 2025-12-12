async function loadBouquets() {
    try {
        const response = await fetch("data.json"); 
        const data = await response.json();

        console.log("Отримано:", data);

        renderCatalog(data); 
    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}

loadBouquets();

