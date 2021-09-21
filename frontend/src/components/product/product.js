class Product {

    color;
    _id;
    price;
    imageUrl;
    name;
    description;

    /**
     * [constructor description]
     *
     * @param   {HTMLElement}      domTarget  [domTarget description]
     * @param   {Object}           data       [data description]
     * @param   {Array.<String>}   data.color  les couleurs possible pour un produit
     * @param   {String}           data._id    la référence du produit
     * @param   {Number}           data.price  le prix en centimes
     * @param   {String}           data.imageUrl
     * @param   {String}           data.name
     * @param   {String}           data.description
     * 
     *
     * @constructor
     */
    constructor(domTarget, data) {
        this.DOM = document.createElement("article");
        domTarget.appendChild(this.DOM);
        for (const [key, value] of Object.entries(data)) {
            this[key] = value;
        }
        this.render();
        this.DOM.onclick = this.click;
    }

    render() {
        this.DOM.className = "product"
        this.DOM.innerHTML = `
    <div>
        <img src="${this.imageUrl}" alt="photo du produit ${this.name}">
        <h3><${this.name}</h3>
    </div>
    <aside>${this.price / 100}</aside>
    <p>${this.description}</p>

        `
    }

    click() {
        console.log(this)
    }
}