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

  // Test: Sort sweets by name (A-Z)
  it("should sort sweets by name alphabetically", () => {
    shop.addSweet({ id: 1, name: "Rasgulla", category: "Milk", price: 20, quantity: 10 });
    shop.addSweet({ id: 2, name: "Barfi", category: "Milk", price: 30, quantity: 15 });
    shop.addSweet({ id: 3, name: "Kaju Katli", category: "Nut-Based", price: 50, quantity: 5 });

    const sorted = shop.sortByName();
    expect(sorted[0].name).toBe("Barfi");
    expect(sorted[1].name).toBe("Kaju Katli");
    expect(sorted[2].name).toBe("Rasgulla");
  });

  // Test: Sort sweets by price (low to high)
  it("should sort sweets by price ascending", () => {
    shop.addSweet({ id: 1, name: "A", category: "Milk", price: 50, quantity: 5 });
    shop.addSweet({ id: 2, name: "B", category: "Milk", price: 10, quantity: 15 });
    shop.addSweet({ id: 3, name: "C", category: "Milk", price: 30, quantity: 10 });

    const sorted = shop.sortByPrice();
    expect(sorted.map(s => s.price)).toEqual([10, 30, 50]);
  });

  // Test: Sort sweets by quantity (high to low)
  it("should sort sweets by quantity descending", () => {
    shop.addSweet({ id: 1, name: "A", category: "Milk", price: 10, quantity: 5 });
    shop.addSweet({ id: 2, name: "B", category: "Milk", price: 10, quantity: 20 });
    shop.addSweet({ id: 3, name: "C", category: "Milk", price: 10, quantity: 15 });

    const sorted = shop.sortByQuantityDesc();
    expect(sorted.map(s => s.quantity)).toEqual([20, 15, 5]);
  });

});

