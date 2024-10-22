# Proshop V2.0 - Full Stack MERN E-commerce Application

Proshop V2.0 is a full-featured e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). The platform provides both a seamless shopping experience for users and robust admin tools for managing products, users, and orders.

## Screenshots

![Screenshot](/frontend/public/images/screens.png?raw=true 'Project Demo')

## Live Demo

You can view the deployed version of the Proshop V2.0 application here:

[Proshop V2.0 Live Demo](https://proshop-vnvn.onrender.com)

## Features

### User Features

- **Full Featured Shopping Cart**: Add/remove items, manage quantities, and checkout with PayPal or credit card.
- **Product Reviews and Ratings**: Users can leave reviews and ratings for products.
- **Top Products Carousel**: Showcase top-rated products with a responsive carousel on the homepage.
- **Product Pagination**: Paginate through products for a better user experience.
- **Product Search Feature**: Search for products by name or category.
- **User Profile with Orders**: Users can manage their profile, view order history, and check order statuses.

### Admin Features

- **Admin Product Management**: Add, edit, and delete products from the admin dashboard.
- **Admin User Management**: Manage user accounts, including viewing, editing, and deleting users.
- **Admin Order Details Page**: View and update the status of customer orders.
- **Mark Orders as Delivered Option**: Admin can mark orders as delivered, updating the order status.

### Additional Features

- **Checkout Process**: Full checkout process including shipping details, payment method selection, and order confirmation.
- **PayPal / Credit Card Integration**: Secure payment handling via PayPal or credit cards.
- **Database Seeder**: Preload the database with sample users and products for testing or demo purposes.

## Technologies Used

- **MongoDB**: NoSQL database for storing product, user, and order data.
- **Express**: Backend framework to handle server-side logic and APIs.
- **React**: Frontend framework to create an interactive UI.
- **Node.js**: JavaScript runtime environment for server-side code.
- **PayPal API**: Integration for processing secure payments.
- **JWT Authentication**: JSON Web Tokens for user authentication and authorization.

## Getting Started

To get started with the Proshop V2.0 project, clone the repository and follow the instructions below.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [PayPal Developer Account](https://developer.paypal.com/)

### Installation

1. Clone the repo:

   ```bash
   git clone git@github.com:IqbalAhmadi/proshop-v2.0.git
   cd proshop-v2.0
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Install backend dependencies
   npm install

   # Navigate to frontend folder and install dependencies
   cd frontend
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   NODE_ENV = development
   PORT = 8000
   MONGO_URI = your_mongo_uri
   JWT_SECRET = your_jwt_secret
   PAYPAL_CLIENT_ID = your_paypal_client_id
   ```

4. Run the app:

   ```bash
   # Run backend server
   npm run server

   # Run frontend (in another terminal window)
   npm run client
   ```

5. Your app should now be running on [http://localhost:3000](http://localhost:3000) for the frontend, and the backend on [http://localhost:5000](http://localhost:8000).

### Database Seeding

To seed the database with sample data (products and users), run the following command:

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
