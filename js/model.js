class MaterialModel {
    constructor() {
        this.materials = [
            { id: 1, title: "Основи HTML-документа", author: "Черномазов Владислав", category: "HTML", description: "Навчальний матеріал про структуру HTML-сторінки." },
            { id: 2, title: "Оформлення сторінки за допомогою CSS", author: "Черномазов Владислав", category: "CSS", description: "Приклад використання стилів для покращення вигляду." },
            { id: 3, title: "JavaScript і робота з DOM", author: "Черномазов Владислав", category: "JavaScript", description: "Взаємодія зі структурами сторінки за допомогою скриптів." },
            { id: 4, title: "Архітектура MVC у веброзробці", author: "Черномазов Владислав", category: "MVC", description: "Розподіл коду на Model, View та Controller." },
            { id: 5, title: "Форми та взаємодія з користувачем", author: "Черномазов Владислав", category: "HTML", description: "Особливості створення форм введення даних." }
        ];
    }

    getAllMaterials() {
        return this.materials;
    }

    filterMaterials(searchText, category) {
        return this.materials.filter(material => {
            const matchesSearch = material.title.toLowerCase().includes(searchText.toLowerCase()) || 
                                  material.author.toLowerCase().includes(searchText.toLowerCase());
            const matchesCategory = category === "" || material.category === category;
            return matchesSearch && matchesCategory;
        });
    }
}