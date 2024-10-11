# Node.js API for Product Management

This project is a RESTful API built with Node.js and Express.js, designed to manage a products collection in MongoDB. It supports basic CRUD (Create, Read, Update, Delete) operations for handling product data.

## Table of Contents
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
  - [GET /](#get-)
  - [GET /products](#get-products)
  - [GET /products/:id](#get-productsid)
  - [POST /products](#post-products)
  - [PUT /products/:id](#put-productsid)
  - [DELETE /products/:id](#delete-productsid)
- [Getting Started](#getting-started)
- [License](#license)

## Technologies Used
- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- MongoDB Atlas
- JavaScript (ES6)

## API Endpoints

### GET /
- **Description:** Returns a welcome message.
- **Response:**
  - 200 OK
  - Body: `Hello there welcome to my API`

### GET /products
- **Description:** Fetches all products from the database.
- **Response:**
  - 200 OK
  - Body: Array of product objects

### GET /products/:id
- **Description:** Fetches a product by its ID.
- **Parameters:**
  - `id`: The ID of the product to retrieve.
- **Response:**
  - 200 OK
  - Body: Product object
  - 404 Not Found (if no product is found with the given ID)

### POST /products
- **Description:** Adds a new product to the database.
- **Request Body:**
  - JSON object containing product details (e.g., name, price, description)
- **Response:**
  - 200 OK
  - Body: Created product object
  - 500 Internal Server Error (if there is an error during creation)

### PUT /products/:id
- **Description:** Updates an existing product by its ID.
- **Parameters:**
  - `id`: The ID of the product to update.
- **Request Body:**
  - JSON object containing updated product details
- **Response:**
  - 200 OK
  - Body: Updated product object
  - 404 Not Found (if no product is found with the given ID)
  - 500 Internal Server Error (if there is an error during the update)

### DELETE /products/:id
- **Description:** Deletes a product by its ID.
- **Parameters:**
  - `id`: The ID of the product to delete.
- **Response:**
  - 200 OK
  - Body: Deleted product object
  - 404 Not Found (if no product is found with the given ID)
  - 500 Internal Server Error (if there is an error during deletion)
