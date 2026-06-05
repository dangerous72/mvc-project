class MaterialController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindSearch(this.handleFilter.bind(this));
        this.view.bindReset(this.handleReset.bind(this));

        this.showAllMaterials();
    }

    showAllMaterials() {
        this.view.renderMaterials(this.model.getAllMaterials());
    }

    handleFilter() {
        const filtered = this.model.filterMaterials(this.view.getSearchText(), this.view.getSelectedCategory());
        this.view.renderMaterials(filtered);
    }

    handleReset() {
        this.view.clearInputs();
        this.showAllMaterials();
    }
}