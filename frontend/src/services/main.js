
const data = [
    {
        "couleurs": ["Marron pâle", "Marron foncé", "Blanc"],
        "_id": "5beaa8bf1c9d440000a57d94", "name": "Arnold", "price": 3900,
        "imageUrl": "http://localhost:3000/images/teddy_2.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    { "colors": ["Brown"], "_id": "5beaaa8f1c9d440000a57d95", "name": "Lenny et Carl", "price": 5900, "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "imageUrl": "http://localhost:3000/images/teddy_3.jpg" }, { "colors": ["Marron", "Bleu", "Rose"], "_id": "5beaabe91c9d440000a57d96", "name": "Gustav", "price": 4500, "imageUrl": "http://localhost:3000/images/teddy_4.jpg", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }, { "colors": ["Beige", "Tan", "Chocolate"], "_id": "5beaacd41c9d440000a57d97", "name": "Garfunkel", "price": 5500, "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "imageUrl": "http://localhost:3000/images/teddy_5.jpg" }]
    ;
new Pagetest(document.querySelector("section"), data);
const panier = new Cart(document.querySelector("nav"));