class Cart {
    constructor(domTarget) {
        this.DOM = document.createElement("a");
        this.DOM.className = "panier";
        this.DOM.href = "panier.html";
        this.content = 0;
        domTarget.appendChild(this.DOM);
        this.render();
    }

    render() {
        this.DOM.innerHTML = `<i class="fas fa-shopping-basket" data-content="${this.content}"></i>${this.content} produit${this.content >1 ? "s":""}`;
    }
    update(qty) {
        this.content = qty;
        this.render();
    }
}