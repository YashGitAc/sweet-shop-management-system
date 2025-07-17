class SweetShop {
    constructor() {
        // Initializes an empty array to store all sweets in the shop
        this.sweets = [];
    }


    // Adds a new sweet to the shop.

    addSweet(sweet) {
        const exists = this.sweets.some(s => s.id === sweet.id);
        if (exists) {
            throw new Error("Sweet with this ID already exists");
        }
        this.sweets.push(sweet);
    }


    // Deletes a sweet from the shop by its ID.

    deleteSweet(id) {
        this.sweets = this.sweets.filter(s => s.id !== id);
    }

    // Searches for sweets by name (case-insensitive).

    searchByName(name) {
        return this.sweets.filter(s =>
            s.name.toLowerCase().includes(name.toLowerCase())
        );
    }


    // searches for sweets by category (case-insensitive).

    searchByCategory(category) {
        return this.sweets.filter(s =>
            s.category.toLowerCase() === category.toLowerCase()
        );
    }


    // Searches for sweets by a price range.

    searchByPrice(min, max) {
        return this.sweets.filter(s => s.price >= min && s.price <= max);
    }


    // Purchases a sweet by ID and decreases its quantity in stock.

    purchaseSweet(id, quantity) {
        const sweet = this.sweets.find(s => s.id === id);
        if (!sweet) {
            throw new Error("Sweet not found");
        }
        if (sweet.quantity < quantity) {
            throw new Error("Not enough stock");
        }
        sweet.quantity -= quantity;
    }


    // Increases the quantity of a sweet in stock.

    restockSweet(id, quantity) {
        const sweet = this.sweets.find(s => s.id === id);
        if (!sweet) {
            throw new Error("Sweet not found");
        }
        sweet.quantity += quantity;
    }


    // Sort sweets by name alphabetically (A-Z).

    sortByName() {
        return [...this.sweets].sort((a, b) => a.name.localeCompare(b.name));
    }

    // Sort sweets by price in ascending order.

    sortByPrice() {
        return [...this.sweets].sort((a, b) => a.price - b.price);
    }

    // Sort sweets by quantity in descending order.

    sortByQuantityDesc() {
        return [...this.sweets].sort((a, b) => b.quantity - a.quantity);
    }

    // Returns all sweets currently in the shop.

    getAllSweets() {
        return this.sweets;
    }
}


module.exports = { SweetShop };
