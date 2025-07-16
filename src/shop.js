class SweetShop {
    constructor() {
        // Initializes an empty array to store all sweets in the shop
        this.sweets = [];
    }

    /**
    * Adds a new sweet to the shop.
    * @param {Object} sweet - The sweet object with id, name, category, price, and quantity.
    * Throws an error if a sweet with the same ID already exists.
    */
    addSweet(sweet) {
        const exists = this.sweets.some(s => s.id === sweet.id);
        if (exists) {
            throw new Error("Sweet with this ID already exists");
        }
        this.sweets.push(sweet);
    }

    /**
   * Returns all sweets currently in the shop.
   * @returns {Array} List of sweets.
   */
    getAllSweets() {
        return this.sweets;
    }
}

module.exports = { SweetShop };