const orders = [
    {
        date: '2005-12-7',
        subtotal: 90.22,
        items: [
            {
                products: {
                    id: 'redshoe',
                    description: 'Old Red Shoe',
                    price: 45.11,
                },
                quantity: 2,
            }
        ]
    }
];

function getALLOrders () {
    return orders;
}

module.exports = {
    getALLOrders,
}