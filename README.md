Shopfinity - Shopping Cart Website Documentation
Welcome to Shopfinity, your go-to destination for online shopping! This documentation will guide you through the setup process and explain how to use the various features of our website.

Setup Instructions
1. Installation
To get started with Shopfinity, follow these steps to set up the website on your local machine or server:

Clone the latest version of the Shopfinity repository from GitHub to your local machine:

bash
Copy code
git clone https://github.com/MateoZ2001/Shopfinity.git
Navigate to the project directory:

bash
Copy code
cd Shopfinity
Install project dependencies using npm or yarn:

Copy code
npm install
or

Copy code
yarn install
2. Firebase Setup
Shopfinity uses Firebase for authentication and database services. Follow these steps to set up Firebase for your project:

Create a Firebase project in the Firebase Console.

Set up Firebase Authentication to enable user authentication for your website.

Set up Firebase Realtime Database or Firestore to store product data, user information, and cart items.

Obtain your Firebase configuration details (apiKey, authDomain, projectId, etc.) from the Firebase Console.

Add your Firebase configuration to the project by creating a .env file in the project root directory and adding the configuration variables:

makefile
Copy code
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
3. Running the Website
Once the project and Firebase setup is complete, you can run the website locally:

Start the development server:


Copy code
npm start
This command will start the development server and open Shopfinity in your default web browser.

You can now browse the website, add products to your cart, and proceed to checkout.

Using Shopfinity
1. Browsing Products
Navigate through different product categories and view product listings.
Click on a product to view detailed information such as price, description, and images.
2. Adding to Cart and Checkout
Add desired products to your shopping cart by clicking the "Add to Cart" button on the product page.
View your cart by clicking on the shopping cart icon in the navigation bar.
Update quantities or remove items from your cart as needed.
Proceed to checkout, provide shipping and payment information, and complete your purchase securely.
3. User Authentication
Sign up for a new account or log in using your existing credentials to access additional features such as order history and saved addresses.
Stay logged in between sessions for a seamless shopping experience.
Admin Features
Shopfinity includes admin features for managing products and orders:

Admin Dashboard: Access the admin dashboard to add, edit, or delete products.
Order Management: View and manage orders placed by customers, mark orders as shipped, and generate order invoices.
Troubleshooting
If you encounter any issues or have questions about using Shopfinity, refer to the following resources:

Documentation: Check the documentation provided with the project files for troubleshooting tips and FAQs.
Support: Contact our support team for assistance with technical issues, customization requests, or other concerns.
Community Forums: Join our online community forums to connect with other users, share experiences, and get help from fellow Shopfinity users.
