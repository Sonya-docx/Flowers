async function loadBouquets() {
    try {
        const response = await fetch("https://my-json-server.typicode.com/Sonya-docx/Flowers/db.json"); 
        const data = await response.json();
        renderCatalog(data);
    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}

loadBouquets();
