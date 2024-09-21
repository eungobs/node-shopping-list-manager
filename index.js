const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = 3000;
const directoryPath = path.join(__dirname, 'shopping-list');
const filePath = path.join(directoryPath, 'list.json');

// Middleware
app.use(bodyParser.json());

// Create directory if it doesn't exist
fs.ensureDirSync(directoryPath);

// Create JSON file if it doesn't exist
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Shopping List API! Use /shopping-list to manage your items.');
});

// Utility function to read the shopping list
const readShoppingList = () => {
    return fs.readJsonSync(filePath);
};

// Utility function to write to the shopping list
const writeShoppingList = (data) => {
    fs.writeJsonSync(filePath, data, { spaces: 2 });
};

// CRUD operations
// 1. Get all shopping list items
app.get('/shopping-list', (req, res) => {
    const shoppingList = readShoppingList();
    res.json(shoppingList);
});

// 2. Add a new item
app.post('/shopping-list', (req, res) => {
    const newItem = req.body;
    if (!newItem.name) {
        return res.status(400).json({ error: 'Item name is required' });
    }
    const shoppingList = readShoppingList();
    shoppingList.push(newItem);
    writeShoppingList(shoppingList);
    res.status(201).json(newItem);
});

// 3. Update an item
app.put('/shopping-list/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const shoppingList = readShoppingList();

    if (!shoppingList[id]) {
        return res.status(404).json({ error: 'Item not found' });
    }

    shoppingList[id] = updatedItem;
    writeShoppingList(shoppingList);
    res.json(updatedItem);
});

// 4. Delete an item
app.delete('/shopping-list/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const shoppingList = readShoppingList();

    if (!shoppingList[id]) {
        return res.status(404).json({ error: 'Item not found' });
    }

    shoppingList.splice(id, 1);
    writeShoppingList(shoppingList);
    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
