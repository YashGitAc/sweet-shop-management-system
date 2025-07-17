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


    // Returns all sweets currently in the shop.

    getAllSweets() {
        return this.sweets;
    }


}

module.exports = { SweetShop };
