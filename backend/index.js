require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4001;
const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

const cors = require("cors")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(bodyParser.json())

const { HoldingsModel } = require("./model/HoldingsModel.js")
const { PositionsModel } = require("./model/PositionsModel.js")
const { OrdersModel } = require("./model/OrdersModel.js")
const { UserModel } = require("./model/UserModel.js");



mongoose.connect(URL)
    .then(() => { console.log("DB connected successfully") })
    .catch((err) => { console.log("DB connection failed", err) })

//holdings
app.get("/allHoldings", async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({})
        res.status(200).json(allHoldings)
    }
    catch (err) {
        console.error("Error fetching holdings:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

//Positoins
app.get('/allPostions', async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({})
        res.status(200).json(allPositions)
    } catch (err) {
        console.error("Error fetching positions:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

//newOrders
app.post("/newOrder", async (req, res) => {
    try {
        let newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode
        })
        newOrder.save()

    } catch (err) {
        console.error("Error saving newOrder:", err);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

app.get("/allOrders", async (req, res) => {
    try {
        const allOrders = await OrdersModel.find({})
        // console.log(allOrders)
        res.status(200).json(allOrders)
    } catch (error) {
        console.error("Error fetching Orders:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.delete('/deleteOrders/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedOrder = await OrdersModel.findByIdAndDelete(id)
        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        } else {
            res.status(200).json({ message: " Delete successful", data: deletedOrder })
        }

    } catch (error) {
        console.error("Error in deleting", error);
        res.status(500).json({ error: "Internal server Error" });

    }
})

//Signup
app.post("/signup", async (req, res) => {

    try {

        const { username, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email })  
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Create user
        const newUser = new UserModel({
            email,
            username,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "Signup successful" });

    } catch (err) {
        console.error("Error in signup:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

//Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });
        // console.log("User found:", user);
        if (!user) return res.status(400).json({ msg: "Invalid USER credentials - 1" });

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);
        if (!isMatch) return res.status(400).json({ msg: "Invalid password match credentials -2" });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
            }
        });

    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

