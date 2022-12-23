const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require("express-session");

const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userId",
    secret: "testing",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 60 * 60 * 24,
    },
}))


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "coldbrew"
})

//register 
app.post("/register", async (req, res)=>{
    try{
        const user_fname = req.body.user_fname;
        const user_email = req.body.user_email;
        const user_address = req.body.user_address;
        const user_password = await bcrypt.hash(req.body.user_password, 10);

        db.query("SELECT * FROM `customer` WHERE email =?",
        [user_email],
        (err,result) =>{
            if(result && result.length > 0){
                res.send({message: "Email has been used"});
                console.log('email used');
            }else{
                db.query("INSERT INTO `customer` (email, Fname, address, password) VALUES (?, ?, ?, ?)", 
                    [user_email, user_fname, user_address, user_password], 
                    (err, result) => {
                        if(err){
                        console.log(err);                                
                        }
                    }
                );
                res.send({message: "Account registered"});
                console.log("Account registered");
            }
        }
        );
    } catch{
        
    }
});

app.get("/login", (req, res) => {
    if (req.session.user){
        res.send({
            loggedIn: true,
            user: req.session.user,
        });
    }else{
        res.send({loggedIn: false});
    }
});

//login code
app.post("/login", async (req, res) => {
    try{
        const user_email = req.body.user_email;

        db.query("SELECT * FROM `customer` WHERE email = ?", 
            [user_email], 
            (err, result) => {
                if(err) {
                    console.log("Email does not exists");
                    console.log("error in sql query");
                    res.send({err: err});
                }
                if(result.length > 0){
                    console.log(result);
                    const user = JSON.parse(JSON.stringify(result));
                    try{
                        if(bcrypt.compareSync(req.body.user_password, user[0].password)){   
                            req.session.user = result;
                            console.log(req.session.user);        
                            res.send(result);
                            console.log('login success');
                        }else{
                            res.send({message: 'Wrong Password!'});
                            console.log('Wrong password!');
                        }
                    }catch{
                        console.log("error in compare")
                    }

                }else{
                    res.send({message: "Email has not been registered!"});
                    console.log("Email does not exist");
                }

            }
        );
    } catch{

    }
})



//shop
app.get("/shop", (req,res) => {
    db.query("SELECT * FROM products", 
        (err, result) => {
            res.send(result);
        }
    );
})


function getDateToday(){
    let today = new Date();

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    let current_date = `${year}-${month}-${date}`;
    return current_date;
}


//addtocart
app.post("/addcart", (req, res) => {
    const date = getDateToday();
    console.log(date);

    const user_id = req.body.user_id
    const prod_id = req.body.prod_id;
    const quantity = req.body.quantity;

    
    db.query("INSERT INTO `orders` (productID, customerID, date, quantity) VALUES(?, ?, ?, ?)",
        [prod_id, user_id, date, quantity],
        (err, result) => {
            if(err){
                res.send(err);
                console.log(err);
            }else{
                res.send("Successfuly added to Cart");
                console.log("order added to cart");
            }
        }
    )
});

//cart
app.post("/cart", (req, res) => {

    const user_id = req.body.user_id;

    db.query("SELECT o.id, p.name, o.quantity, p.price FROM `orders` o, `products` p WHERE p.id = o.productID AND o.customerID = ? ",
    [user_id],
    (err, result) => {
        if(err){
            res.send(err);
            console.log(err);
        }else{
            
            db.query("SELECT SUM(p.price) as sum FROM `products` p,  `orders` o WHERE p.id = o.productID AND o.customerID = ?;",
            [user_id],
            (err2,res2) =>{
                res.send({result, res2});
                console.log({result, res2});
            })  

        }
    }
    )
});


//checkout
//deletes the rows that have been queried to simulate checkout and remove the items







//profile
//returns the data of the user

app.listen(3002, ()=>{
    console.log("Connected to backend!")
})