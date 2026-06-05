document.addEventListener('DOMContentLoaded', () => {
    const model = new MaterialModel();
    const view = new MaterialView();
    const app = new MaterialController(model, view);
});