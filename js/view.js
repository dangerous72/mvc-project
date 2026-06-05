class MaterialView {
    constructor() {
        this.container = document.getElementById('materialsContainer');
        this.searchInput = document.getElementById('searchInput');
        this.categorySelect = document.getElementById('categorySelect');
        this.resetBtn = document.getElementById('resetBtn');
    }

    getSearchText() { return this.searchInput.value; }
    getSelectedCategory() { return this.categorySelect.value; }
    
    clearInputs() {
        this.searchInput.value = '';
        this.categorySelect.value = '';
    }

    renderMaterials(materials) {
        this.container.innerHTML = '';
        if (materials.length === 0) {
            this.container.innerHTML = '<p>Нічого не знайдено.</p>';
            return;
        }
        materials.forEach(material => {
            const card = document.createElement('div');
            card.className = `card ${material.category.toLowerCase()}`;
            card.innerHTML = `
                <h3>${material.title}</h3>
                <p><strong>Автор:</strong> ${material.author}</p>
                <p>${material.description}</p>
            `;
            this.container.appendChild(card);
        });
    }

    bindSearch(handler) {
        this.searchInput.addEventListener('input', handler);
        this.categorySelect.addEventListener('change', handler);
    }

    bindReset(handler) {
        this.resetBtn.addEventListener('click', handler);
    }
}