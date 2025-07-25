# 🍬 Sweet Shop Management System

A simple and test-driven backend application built with **JavaScript** to manage sweets inventory in a sweet shop. This project demonstrates **clean coding**, **SOLID principles**, **TDD**, and **Git version control**.

---

## ✅ Features

This application allows you to:

- **Add** new sweets to the shop.
- **Delete** sweets by ID.
- **View** all sweets currently available.
- **Search** sweets by:
  - Name (case-insensitive, partial matches)
  - Category (case-insensitive exact match)
  - Price range (min → max)
- **Sort** sweets by:
  - Name (A-Z)
  - Price (Low → High)
  - Quantity (High → Low)
- **Purchase** sweets:
  - Reduces quantity if enough stock is available.
  - Throws an error if requested quantity exceeds stock.
- **Restock** sweets:
  - Increases quantity for an existing sweet.

---

## 🛠️ Tech Stack

- Language: **JavaScript (ES6+)**
- Testing: **Jest**
- Node: Used for local testing and running the backend logic
- Git: For tracking TDD and code versioning

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YashGitAc/sweet-shop-management-system
cd sweet-shop
