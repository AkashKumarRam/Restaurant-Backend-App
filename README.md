
## Hi, I'm Akash Kumar Ram! 👋

I’m a passionate **Full Stack Developer** who loves building scalable web applications and backend systems. I specialize in:

- ⚡ **Frontend:** Next.js, TypeScript  
- 🔧 **Backend:** Node.js, Express  
- 🛢️ **Databases:** MongoDB, PostgreSQL  
- 🐳 **DevOps:** Docker, Redis  
- 📡 **Streaming:** Apache Kafka  

Always learning, always building 🚀



## 🔗 Links

[![Github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/AkashKumarRam)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akash-kumar-ram-b02387252)


# Restaurant-Backend-App

🍽️ Restaurant Backend App – A robust and secure backend system for managing restaurant operations like user auth, menu, orders, and role-based access. Built with Node.js, Express, MongoDB, Mongoose, and JWT.


## Demo

https://restaurant-backend-app-wvhe.onrender.com

## 🛠️ Tech Stack Used

This backend application is built using the following technologies:

- **Node.js** – JavaScript runtime used for building fast and scalable server-side applications.
- **Express.js** – Minimal and flexible Node.js web application framework.
- **MongoDB** – NoSQL database used for efficient and scalable data storage.
- **Mongoose** – ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Token)** – For secure, stateless user authentication and role-based access.
- **Bcrypt** – Library for hashing passwords to securely store user credentials.
# 🍽️ Restaurant Backend API Documentation

A RESTful backend service for restaurant management built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT**, and **Bcrypt**.

---

## 🌍 Base URL

```
http://localhost:8080/api/v1
```

---

## 🔐 Auth Routes

| Method | Endpoint                            | Description         | Auth Required |
|--------|-------------------------------------|---------------------|----------------|
| POST   | `/auth/register`                    | Register new user   | ❌              |
| POST   | `/auth/login`                       | Login and get token | ❌              |

---

## 👤 User Routes

| Method | Endpoint                            | Description                  | Auth Required |
|--------|-------------------------------------|------------------------------|----------------|
| GET    | `/user/getUser`                     | Get current user             | ✅              |
| PUT    | `/user/updateUser`                  | Update user details          | ✅              |
| POST   | `/user/updatePassword`              | Update user password         | ✅              |
| POST   | `/user/resetPassword`               | Reset password               | ✅              |
| DELETE | `/user/deleteUser/:id`              | Delete user by ID (Admin)    | ✅              |

---

## 🏢 Restaurant Routes

| Method | Endpoint                            | Description                     | Auth Required |
|--------|-------------------------------------|---------------------------------|----------------|
| POST   | `/resturant/create`                 | Create a new restaurant         | ✅              |
| GET    | `/resturant/getAll`                 | Get all restaurants             | ❌              |
| GET    | `/resturant/get/:id`                | Get restaurant by ID            | ❌              |
| DELETE | `/resturant/delete/:id`             | Delete restaurant by ID         | ✅              |

---

## 📂 Category Routes

| Method | Endpoint                            | Description                  | Auth Required |
|--------|-------------------------------------|------------------------------|----------------|
| POST   | `/category/create`                  | Create a category            | ✅              |
| GET    | `/category/getAll`                  | Get all categories           | ❌              |
| PUT    | `/category/update/:id`              | Update category by ID        | ✅              |
| DELETE | `/category/delete/:id`              | Delete category by ID        | ✅              |

---

## 🍽️ Food Routes

| Method | Endpoint                                | Description                            | Auth Required |
|--------|-----------------------------------------|----------------------------------------|----------------|
| POST   | `/food/create`                          | Create a new food item                 | ✅              |
| GET    | `/food/getAll`                          | Get all food items                     | ❌              |
| GET    | `/food/get/:id`                         | Get single food item by ID            | ❌              |
| GET    | `/food/getByResturant/:id`              | Get food items by restaurant ID        | ❌              |
| PUT    | `/food/update/:id`                      | Update food by ID                      | ✅              |
| DELETE | `/food/delete/:id`                      | Delete food by ID                      | ✅              |

---

## 📦 Order Routes

| Method | Endpoint                                     | Description                 | Auth Required |
|--------|----------------------------------------------|-----------------------------|----------------|
| POST   | `/food/placeorder`                           | Place a new order           | ✅              |
| POST   | `/food/orderStatus/:id`                      | Update order status (Admin) | ✅ (Admin)      |


## 🔐 JWT Authentication

For protected routes, include this header in your requests:

```
  Authorization: Bearer <your-token>

```
# Installation
   
## 1. Clone the repo
```bash
git clone https://github.com/AkashKumarRam/Restaurant-Backend-App.git
```

## 2. Navigate into the project
```bash
cd restaurant-app

```

## 3. Install dependencies
```bash
npm install
```

## 4. Create a .env file in the root directory
```bash
touch .env
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=`

`MONGO_URL=`

`JWT_SECRET=`



Start the server

```bash
  npm run server
```


## Feedback

If you have any feedback, please reach out to us at [LinkedIn](https://www.linkedin.com/in/akash-kumar-ram-b02387252)


## FAQ

#### What if I don't run this project?

Connect with me on [LinkedIn](https://www.linkedin.com/in/akash-kumar-ram-b02387252)


## Support

For support, Dm me on [LinkedIn](https://www.linkedin.com/in/akash-kumar-ram-b02387252)


## Authors

- [@Akash Kumar Ram](https://github.com/AkashKumarRam)

