class Pagetest {
    constructor(domTarget, props) {
        props.forEach(product => {
            new Product(domTarget, product);

        });
    }
}