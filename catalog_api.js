async function loadBouquets() {
    try {
        const response = await fetch("server/data.json"); // якщо data.json у папці server
        const data = await response.json();

        console.log("Отримано:", data);

        renderCatalog(data); // ✅ ПРАВИЛЬНО
    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}

loadBouquets();

