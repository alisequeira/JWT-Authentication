//1.Init the express app
//2.Setup a mongoose model in models/user.js
//3.Create  a create user and login user controller in controllers/user.js (install jwt token)
//4.Create the router but protected with a jwt.auth,we do that installing express-kun routes/user.js
//Try access the GET /users route to get all users, you will get a 401 error,
// To be able to access you need a bearer token in Authorization with this format (Authorization: `Bearer $token`)
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/user');

mongoose.connect(/*YOUR Mongo uri*/).then(() => console.log('success connect db'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.listen(8000, process.env.Ip, () => console.log('server run successfully'));