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

  // Test: Search by name (case-insensitive)
  it("should search sweets by name", () => {
    shop.addSweet({ id: 3, name: "Rasgulla", category: "Milk", price: 15, quantity: 20 });
    const result = shop.searchByName("ras");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Rasgulla");
  });

  // Test: Search by category (case-insensitive)
  it("should search sweets by category", () => {
    shop.addSweet({ id: 4, name: "Ladoo", category: "Nut-Based", price: 25, quantity: 10 });
    const result = shop.searchByCategory("Nut-Based");
    expect(result[0].name).toBe("Ladoo");
  });

  // Test: Search by price range
  it("should search sweets by price range", () => {
    shop.addSweet({ id: 5, name: "Jalebi", category: "Fried", price: 30, quantity: 15 });
    shop.addSweet({ id: 6, name: "Imarti", category: "Fried", price: 50, quantity: 10 });
    const result = shop.searchByPrice(20, 40);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Jalebi");
  });

  // Test: Purchase sweet and reduce stock
  it("should allow purchasing if enough stock", () => {
    shop.addSweet({ id: 7, name: "Halwa", category: "Veg", price: 20, quantity: 10 });
    shop.purchaseSweet(7, 5);
    expect(shop.getAllSweets()[0].quantity).toBe(5);
  });

  // Test: Error when trying to purchase more than available
  it("should throw error if not enough stock", () => {
    shop.addSweet({ id: 8, name: "Peda", category: "Milk", price: 10, quantity: 3 });
    expect(() => {
      shop.purchaseSweet(8, 5);
    }).toThrow("Not enough stock");
  });

   // Test: Restock sweet successfully
  it("should restock sweets", () => {
    shop.addSweet({ id: 9, name: "Soan Papdi", category: "Flaky", price: 20, quantity: 10 });
    shop.restockSweet(9, 5);
    expect(shop.getAllSweets()[0].quantity).toBe(15);
  });

});

