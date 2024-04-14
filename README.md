# Book Webshop med Stripe

## Project description
In this project, I build a webshop with Stripe integration. 
Users should be able to register and add products to a shopping cart. They should then be able to check out using Stripe through the shopping cart and complete their payment. Additionally, for the highest grade (VG), users should be able to find their nearest pickup location using PostNord's API.


## Installation
- Clone this GitHub repository.
- Install dependencies in both the server and client directories.
  - For server:
  ```
  cd server
  npm install
  ```

  - For client:

  ```
  cd client
  npm install
  ```

## Configuration
Create a .env file in the server directory. These files should contain necessary API keys and configurations specific to your environment.

`.env` i server:
```
STRIPE_KEY="YOUR_KEY_HERE"
POSTNORD_KEY="YOUR_KEY_HERE"
```

## Running the project
To start the server and client, run the following commands in separate terminal windows:

- For Server:
```
cd server
npm start
```

- For Client:
```
cd client
npm run dev
```

### About the tech
- **Frontend:** React, TypeScript
- **Backend:** Node.js with Express
- **Data Handling:** JSON files for storing user data and orders
- **Other:** Stripe for payments, PostNord API for pickup locations.