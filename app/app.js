
//THIRD PARTY MODULES
import express, { urlencoded } from "express"; // is importing the Express module from the NPM package named "express".
import logger from "morgan";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//ES MODULES FIX FOR __DIRNAME
import path, {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// Auth Step 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

//MODULES FOR JTW SUPPORT
import cors from 'cors';
import passportJWT from "passport-jwt";

//define strategy for JWT
let JWTStrategy = passportJWT.Strategy; 
/*This first line is creating a new strategy object using the passportJWT.Strategy constructor. This strategy will be used to authenticate requests based on the contents of a JSON Web Token. */
let ExtractJWT = passportJWT.ExtractJwt;
/*The second line is creating an instance of the passportJWT.ExtractJwt object, which is used to extract the token from incoming requests. */


// Auth Step 2 - define our auth strategy
let localStrategy = passportLocal.Strategy;

// Auth Step 3 - import the user model
import User from './models/user.js';


//IMPORT MONGOOSE
import mongoose from "mongoose";
//TO SOLVE THIS DEPRECATION WARNING PROBLEM (DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose):
mongoose.set('strictQuery', true);


//CONFIGURATION MODULE SESSION AND MONGODB
import { Secret, MongoURL } from '../config/config.js';

// Method to establish a connection to a MongoDB database using Mongoose Library
mongoose.connect(MongoURL);

//CHECK IF OUR APPLICATION IS CONNECTED TO MONGO OR NOT
const db = mongoose.connection;
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("MongoDB Connection ERROR"));


//LISTEN FOR CONNECTION SUCCES OR ERROR
db.on



//IMPORT ROUTES
import router from "./Routes/index.routes.server.js";
import movieRouter from './Routes/contacts.route.server.js';
import authRouter from './Routes/auth.route.server.js';
import apiRoute from './Routes/api/auth-api.route.server.js';



//INSTANTIATE EXPRESS
const app = express(); //Creates an instance of the Express application. This instance will be used to configure the behavior of the web server.




//SETTING UP MIDDLEWARES:
app.set('views', path.join(__dirname, '/Views'));

/*
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
app.set is a method that allows you to set various configuration settings for your Express.js application. The first argument to this method is the name of the setting you want to configure, in this case 'views'.

The second argument is the value for the setting. path.join(__dirname, '/app/Views') is a way to dynamically determine the absolute path to the Views directory in the application. The path.join function concatenates the values passed to it and ensures that the resulting string is a valid file path, even if the underlying operating system uses different file path separators (e.g. / on Unix-based systems and \ on Windows).

__dirname is a global variable in Node.js that contains the absolute path of the directory that the currently executing script resides in.

So, putting it all together, app.set('views', path.join(__dirname, '/app/Views')) is setting the 'views' configuration setting to the absolute path to the Views directory within the application. This setting is used to specify the location of the templates that will be used to render the views in the application.
*/

app.set('view engine', "ejs"); // SETTING UP THE APPLICATION TO USE EJS FILES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../public'))); // This makes the contents of the "public" directory in your project's directory accessible to the client-side.

app.use(cors());


// Auth Step 4 - Setup Express Session
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

// Auth Step 5 -  Setup Flash
app.use(flash());

// Auth Step 6 - Initialize Passport and Session
app.use(passport.initialize());
app.use(passport.session());

// Auth Step 7 - Implementing the Auth Strategy
passport.use(User.createStrategy());

// Auth Step 8 - Setup serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// SETUP JWT OPTIONS
let jwtOptions = 
{
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : Secret
}

//SETUP JWT STRATEGY

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done)=>
{
    User.findById(jwt_payload.id) .then(user =>
        {
            return done(null, user)
        })
        .catch(err =>
            {
                return done(err, false)
            });
})

/*
1) let strategy declares a variable called strategy using the let keyword.

2) new JWTStrategy(jwtOptions, (jwt_payload, done)=> creates a new instance of a JWT strategy using the passport-jwt module. It takes two arguments:
jwtOptions, which is an object containing options for the strategy, such as the secret used to sign the JWT and the method used to extract it from the request.

3) An anonymous arrow function that takes two arguments: jwt_payload and done. This function is the "verify callback" that the strategy uses to verify the JWT and return the authenticated user to the application.

4) User.findById(jwt_payload.id) is a method call that searches the database for a user with the ID stored in the jwt_payload object (which contains the user's ID extracted from the JWT).

5) .then(user => { return done(null, user) }) is a promise chain that handles the result of the findById call. If a user is found, the arrow function returns done(null, user), which indicates to the strategy that the user is authenticated and should be returned to the application.

6) .catch(err => { return done(err, false) }) is a promise chain that handles any errors that occur during the findById call. If an error occurs, the arrow function returns done(err, false), which indicates to the strategy that authentication failed and the request should be rejected.

Overall, this code defines a JWT authentication strategy that verifies the user's JWT by looking up their ID in the database and returning the user object if found. If an error occurs or the user is not found, the strategy rejects the request. */

// USE THE ROUTES
app.use('/', router);
app.use('/', movieRouter);
app.use('/', authRouter);
app.use('/api', apiRoute);

export default app;
