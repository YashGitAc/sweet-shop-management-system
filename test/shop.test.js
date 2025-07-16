const { SweetShop } = require('../src/shop');

describe("SweetShop", () => {
    let shop;

    // Setup a new SweetShop before each test
    beforeEach(() => {
        shop = new SweetShop();
    });

    // Test: Adding a sweet
    it("should add a sweet", () => {
        shop.addSweet({ id: 1, name: "Kaju Katli", category: "Nut-Based", price: 50, quantity: 20 });
        expect(shop.getAllSweets()).toHaveLength(1);
    });
});
