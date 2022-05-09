const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
        reviews: []
    },
    {
        id: 'bluejean',
        description: 'Blue Jean',
        price: 55.55,
        reviews: []
    }
];

function getAllProducts () {
    return products;
}

function getAllProductsByPrice(min, max) {
    return products.filter((products) => {
        return products.price >= min && products.price <= max;
    });
}

function getProductsByID(id) {
    return products.find((products) => {
        return products.id === id;
    });
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment){
    const newProductReview = {
        rating,
        comment,
    }
    products.find((products) => {
        if(products.id === id){
            products.reviews.push(newProductReview);
        }
    });

    return newProductReview;
}

module.exports = {
    getAllProducts, 
    getAllProductsByPrice,
    getProductsByID,
    addNewProduct,
    addNewProductReview
}