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

     // Test: Delete a sweet by ID
  it("should delete a sweet", () => {
    shop.addSweet({ id: 2, name: "Gulab Jamun", category: "Milk", price: 10, quantity: 30 });
    shop.deleteSweet(2);
    expect(shop.getAllSweets()).toHaveLength(0);
  });
  
});

