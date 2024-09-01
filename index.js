const express = require("express");
const app = express();
const mvcRoutes = require("./routes/mvcRoutes.js");
const productsRouter = require("./routes/productRoutes.js");
const connectDB = require("./models/db.js");

app.set("view engine", "pug");
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
const port = 8000;

app.use("/", mvcRoutes, productsRouter);
connectDB();

app.listen(port);

// users => {id, username, password, email, adress, phone_number, wishlist, role}
// cat => {id, title, img_url, desc}
// products => {id, title, price, stock, expired_date, main_image, images: [], description, properties: [objectid]}
// properties => {id, key, value}
// orders => {id, user_id, products: [Objectid], adress, traking_phonenumber, payment_mathod, status},
// UserReacts => {id, user_id, product_id, comment, rate}
//
//tailwind installing:
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p
