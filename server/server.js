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
        expires: 60 * 60 * 60 * 24,
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





app.listen(3002, ()=>{
    console.log("Connected to backend!")
})