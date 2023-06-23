                             | Thiago Castillo course on NodeJS |

Before we start ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️


Github steps: 
       • Do " npm init" on the folder to make the folder a git repository;
       • Then after creating at least the server.js file do :git add . (to add all files)
                                                             git commit -m " "
       • Then create a new repository on github and paste and run the 3 lines of code.

Inside package.json we have a "scripts": {"test": ""} section, in which we can modify the way we start our application. If for example we add this: 
                                         "scripts": 
                                         {
                                             "test": "",
                                             "start": "nodemon"
                                         }
Then we can run the command ' nmp run "start" ' and our application will start the same way it would when we run nodemon.

Install packages:
       • Install Express => "npm install -g express";
       • Install Express => "npm install connect";
       • Install nodemon => "npm install -g nodemon";
       • Install ejs => "npm install ejs";
       • Install body-parser => "npm install body-parser";
       • Install morgan => "npm install --save morgan";
       • Install express-session => "npm install express-session";
       • Install cookie-parser => "npm install cookie-parser";



Create a Folder Structure: Create all the folders necessary (App, Config, Public) this way ⬇️
                  • App : 
                          • Controllers
                          • Models
                          • Routes
                          • Utils
                          • Views:
                                  • Components
                                  • Contents
                  • Config
                  • Public         


Then we first create our server.js file and it will be like this: 
                                                                 const connect = require('connect');
                                                                 const app = connect();

                                                                 function helloWorld(req, res, next) 
                                                                 {
                                                                     res.setHeader('Content-Type', 'text/html');
                                                                     res.end('<h1>Hello World</h1>');
                                                                 };

                                                                 function goodbyeWorld(req, res, next) {
                                                                     res.setHeader('Content-Type', 'text/plain');
                                                                     res.end('GoodBye World');
                                                                 };

                                                                 // app.use('/')
                                                                 app.use('/hello', helloWorld);
                                                                 app.use('/goodbye', goodbyeWorld);

                                                                 app.listen(3000);
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
We are using the Connect middleware framework to handle HTTP requests.
The 'connect' module is a popular middleware framework for Node.js that provides a suite of middleware functions that can be used to handle HTTP requests and responses. By importing the module with the require function and assigning it to the connect variable, we can use the middleware functions provided by the Connect framework in our application. An HTTP request consists of several parts, including:

Request method: This specifies the type of request being made, such as GET, POST, PUT, or DELETE.

Request URI: This specifies the resource being requested, such as a webpage URL or an API endpoint.

Headers: These provide additional information about the request, such as the content type, cookies, and authentication information.

Body (optional): This contains data sent as part of the request, such as form data or JSON data.

When a server receives an HTTP request, it processes the request and returns an HTTP response to the client, which typically contains the requested resource or some other form of data.

The application creates two middleware functions, helloWorld and goodbyeWorld, which are invoked when the application receives requests to the '/hello' and '/goodbye' routes, respectively.

The helloWorld function sets the content type header to 'text/html' and sends an HTML response with a "Hello World" heading.

The goodbyeWorld function sets the content type header to 'text/plain' and sends a plain text response with a "GoodBye World" message.

The connect function creates a new Connect application instance, to which we attach the two middleware functions using the app.use method. The use method registers the middleware function with the Connect application instance.

Finally, the app.listen method starts the application and listens for incoming HTTP requests on port 3000.

To run this application, you can save the code to a file with a ".js" extension (e.g., "app.js"), navigate to the directory containing the file in your terminal, and run the command node app.js. You can then visit http://localhost:3000/hello and http://localhost:3000/goodbye in your web browser to see the corresponding responses.
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️


• Controller folder : Here is where we will have all of our functions and we will use them using the export function before the function itself. We insert export before every function so that can be used in the routes.

• Routes folder: Here we will manage all of our paths. We use routes entering the import function and we import the fucntions inside the controller like this:
                                                         import {helloWorld, goodbyeWorld} from '../Controllers/index.controller.server.js';

 ____________________________________________________________________________________________________|__________________________________________________________________________________________________|

We now need to wire up the Routes folder, with the Controllers folder, with the server.js file. We do that by:
• STEP 1 = Create index.controllers.server.js file inside Controllers folder and paste the two functions that are inside server.js file with "export" before function which is a keyword in JavaScript that allows us to export functions or other objects from a module.:
                                                     export function helloWorld(req, res, next) 
                                                     {
                                                         res.setHeader('Content-Type', 'text/html');
                                                         res.end('<h1>Hello World</h1>');
                                                     };

                                                     export function goodbyeWorld(req, res, next) 
                                                     {
                                                         res.setHeader('Content-Type', 'text/plain');
                                                         res.end('GoodBye World');
                                                     };

• STEP 2 = Create index.routes.server.js file inside Routes folder and add the import line " import {helloWorld, goodbyeWorld} from '../Controllers/index.controller.server.js'; "
Also we need to import: 
                        import { Router } from "express";

The Router class is a part of the express module, and provides a way to create modular and mountable route handlers in Express, which we can use to define a set of routes that can be reused across different parts of an application. 
And finally the rest of the code:
                                  const router = Router(); // I am initializing the router function.

                                  // app.use('/')
                                  router.use('/hello', helloWorld);
                                  router.use('/goodbye', goodbyeWorld);

                                  export default router;

We are also importing the helloWorld and goodbyeWorld functions from ../Controllers/index.controller.server.js. These functions are route handlers that will be used to handle HTTP requests to the /hello and /goodbye routes, respectively.

After taht we can then define our routes using the router.use() method. Think of a Router like a bus with multiple stops. When you call the router.use() method, you are telling the bus driver to make a stop at a certain place on the route (the "specified path"). When the bus stops at this place, any middleware functions that you've specified will be executed (like people getting on or off the bus), and then the bus will continue on to the next stop on the route.

So in this code, router.use('/hello', helloWorld) is like telling the bus driver to make a stop at the /hello location on the route. When the bus stops there, the helloWorld middleware function will be executed (like people getting on or off the bus at that location), and then the bus will continue on to the next stop. Similarly, router.use('/goodbye', goodbyeWorld) is like telling the bus driver to make a stop at the /goodbye location, and the goodbyeWorld middleware function will be executed there.

By adding middleware functions to the router stack in this way, we can define a set of routes that handle different types of HTTP requests and responses in our application.

Finally, we export the router object as the default export of this module using the export default statement, which allows other modules to import and use this router object.



• STEP 3 = we will modify server.js this way: 
                                              import express from "express"; 

                                              import router from "./app/Routes/index.routes.server.js" 

                                              const app = express(); 

                                              app.use('/', router); 

                                              app.listen(3000); 

⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
This code sets up a basic web server using the Express framework in Node.js. Here's what each line does:

import express from "express";: This line imports the Express module from the NPM package named "express". This module is used to create the web server.

import router from "./app/Routes/index.routes.server.js";: This line imports the router module from the index.routes.server.js file, which defines the routes for the web server.

const app = express();: This line creates an instance of the Express application. This instance will be used to configure the behavior of the web server.

app.use('/', router);: This line tells the app to use the router module for any requests to the root path (/).

app.listen(3000);: This line starts the web server and listens for incoming requests on port 3000. When a request is received, the server will route it to the appropriate endpoint based on the defined routes.
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

 _________________________________________________________________________________________________________________
 
                                       FIRST SET UP COMPLETED 🎉
 _________________________________________________________________________________________________________________

Now We set up more third party modules inside our 'server.js' file :

• import logger from "morgan";
• import session from "express-session";
• import bodyParser from "body-parser";
• import cookieParser from"cookie-parser";

And We create a fix for __dirname like this:
                                            
                                            //ES MODULES FIX FOR __DIRNAME
                                            import path, {dirname} from "path";
                                            import { fileURLToPath } from "url";
                                            const __dirname = dirname(fileURLToPath(import.meta.url));

Now we start adding our middlewares:
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
Middlewares are functions that have access to the request and response objects of an HTTP request/response cycle, as well as the next middleware function in the chain. Middleware functions can use this access to perform a wide range of operations, such as logging, authentication, data parsing, error handling, and more.

Middleware functions are typically chained together in a specific order, with each middleware function passing control to the next middleware function in the chain using the next() function. This allows each middleware function to perform its specific operation and then pass control to the next middleware function, allowing the application to be built up out of small, composable building blocks.

Middleware functions are a key feature of many Node.js web frameworks, such as Express and Connect, and are a powerful tool for building flexible and extensible web applications.
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

• First the views middleware:
                             • app.set('view engine', "ejs"); // SETTING UP THE APPLICATION TO USE EJS FILES
                             • app.use(logger('dev'));
                             • app.use(express.json());
                             • app.use(express.urlencoded({extended : false}));
                             • app.set('views', path.join(__dirname, '/app/Views'));

---------------------------------------------------------------------------------------------------------------

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
START AGAIN FROM WEEK 2 RECORDING MINUTE 58:18 FILE PATH => C:\Users\ricca\OneDrive\Desktop\College\semesters\3 Semester\COMP229\Class Recordings\Week 2
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️


⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
BELOW: STARTING AGAIN FROM WEEK 2 RECORDING MINUTE 58:18 👍
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
                            
                            
                             (STILL ADDING MIDDLEWARES HERE)
                             
                             • app.use(express.static(path.join(__dirname,'/public'))); 

                              Here we are saying that everything under public folder are static files, which means they are on the client side.

                             • app.use(session({
                                secret: 'Mysecret',
                                saveUninitialized: false,
                                resave: false
                               }))

 ____________________________________________________________________________________________________|__________________________________________________________________________________________________|

Now we are going to create our .ejs TEMPLATE file (is like html), under the folder /app/views:

I need now to wire our Controllers into our new .ejs template, and since it will render from the .ejs file, I can go ahead and delete this part of code: 
                                                      • res.setHeader('Content-Type', 'text/html');
                                                        res.end('<h1>Hello World</h1>')
Instead i will use inside the function res.render which comes from express .ejs engine and since I set inside server.js(// SETTING UP THE APPLICATION TO USE EJS FILES) the view engine as ejs I don't need to import it inside the controllers. The VIEWS are rendered by the CONTROLLERS that is called by the ROUTES.

Now we need to set up our index.ejs as a template that renders all of our other .ejs files inside itself, dividing it into 3 components:
----------------------------------------------------------------------------------------------------------------  
                            <head>
                                <title><%= title %></title> <!-- <%= title %> ⬅️ this is another 'hyperlink' that will get the title from the different ejs pages and use it everytime a page is changed. -->
                                WE WILL ALSO INCLUDE OUR LINKS HERE ( BOOTSREAP, CSS FILES, ETC.)
                            </head>
                            <body>

                                <!-- Navigation Component -->

                            <header>
                                <%- include('Components/header.ejs');%>
                            </header>

                            <!-- Main -->
                            <main>
                                <%- include('Contents/' + page + '.ejs'); %>
                            </main>

                            <!-- Footer -->
                            <footer>
                            <%- include('Components/footer.ejs');%>
                            </footer>

                            </body>
-----------------------------------------------------------------------------------------------------------------


First we will create the navigation component:
                                              • We will create a component folder;
                                              • Then we will create an header.ejs file (which will be our navigation bar);
                                              • And we will create a footer.ejs file;
                                              • We will use bootsrap to create our two header and footer ejs.
              
To reuse the .ejs files inside our index.ejs template we must use this code: <!--➡️ " <%- include('Components/header.ejs')%> " ⬅️--> ⬅️ this works like a sort of hyperlink and posts the .ejs views inside our index.ejs template, and it is saying to include in that part of the code a specific .ejs file located at that path.


Also every css and javascript file will be a static file (This is on the client side) and will be placed in the public folder. So I need to create an app.js and an app.css file with their respective folders.
To have this file on the client side we use express and we created this app.use inside server.js file excactly for this reason:
----------------------------------------------------------------------------------------------------------------
                 [ app.use(express.static(path.join(__dirname,'/public'))); ]
----------------------------------------------------------------------------------------------------------------

We also need to sets the directory where the application will look for its views (templates) for rendering dynamic content. In this case, it sets the "views" directory to the path of the "/Views" folder, which is located in the same directory as the current file (indicated by "__dirname").By default, Express looks for views in a folder called "views" in the root directory of the application. However, this line of code explicitly sets the directory to a different folder. The "path" module is used to construct the absolute path to the "/Views" folder, regardless of the operating system's file system. So inside server.js file we will paste this code :
----------------------------------------------------------------------------------------------------------------            
                                                 //SETTING UP MIDDLEWARES:
                                                 app.set('views', path.join(__dirname, '/Views'));
----------------------------------------------------------------------------------------------------------------

There are several reasons why you might want to use the express.static middleware to serve static files:

1 - Improve performance: By serving static files directly to the client, you can improve the performance of your application. When the server doesn't have to dynamically generate the response for static files, it can serve them quickly and efficiently.

2 - Organize your code: By placing your static files in a "public" directory, you can keep your code organized and easier to maintain.

3 - Enhance security: By placing your static files in a separate directory and using the express.static middleware to serve them, you can enhance the security of your application. This prevents clients from accessing sensitive files or directories that should not be publicly accessible.

4 - Facilitate development: When you're developing a web application, you may need to make changes to your CSS or JavaScript files frequently. By using the express.static middleware, you can see your changes immediately without having to restart your server.

Overall, serving static files using express.static is a common and useful practice for building web applications, as it helps to improve performance, organization, security, and development.

---------------------------------------------------------------------------------------------------------------

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
START AGAIN FROM WEEK 2 RECORDING MINUTE 86:02 FILE PATH => C:\Users\ricca\OneDrive\Desktop\College\semesters\3 Semester\COMP229\Class Recordings\Week 2\Week 2 lecture
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️


We can now also use the <%= title %> inside the title tag in Index.ejs to change the title of the page accordingly with the page I am on. To do that we modify the title tag in index.ejs and also we add a Jason variable inside our controller page like this:

                                                           export function displayIndex(req,res,next)
                                                           {
                                                            res.render('index', {title : 'Home'}); 
                                                           } 

The Jason variable '{title : 'Home'}' creates a title for my ejs pages.

---------------------------------------------------------------------------------------------------------------


⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
START AGAIN FROM WEEK 3 RECORDING, MINUTE 5:30 
file:///C:/Users/ricca/OneDrive/Desktop/College/semesters/3%20Semester/COMP229/Class%20Recordings/Week%203/Week%203%20lecture/spa-build/index.html
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️


So now we create the controller function and the respective routes for all the pages that I need for my projects just adding this code to the controller the fucntion it is the same all the time, I will only change the name of the function and replace the 'page: ' json variable with the title of the .ejs page I am wiring up:

                                ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
                                export function displayHomePage(req,res,next)
                                {
                                   res.render('index', {title : 'RR Systems About', page:'about'});
                                }                                


Now we add the routes inside index.routes.server.js
We do the same for every page, just changing the parameters.

---------------------------------------------------------------------------------------------------------------

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
START AGAIN FROM WEEK 3 RECORDING, MINUTE 17:54 
file:///C:/Users/ricca/OneDrive/Desktop/College/semesters/3%20Semester/COMP229/Class%20Recordings/Week%203/Week%203%20lecture/spa-build/index.html
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

We are now working on encrypting our session with this code inside on our config.js file: 

                                                          export const Secret = "MySecret";


We will also use the 'app.use(session)' function inside our server.js file to encrypt our session. So I am going to first import it inside server.js like this:
                                                 import { Secret } from './config/config.js';
Then we will enter the variable Secret:
                                                                    app.use(session({
                                                                        secret: Secret,
                                                                        saveUninitialized: false,
                                                                        resave: false
                                                                    }))
So what happens here is that 'session', which is an express-session module middleware, is being used to encrypt the session.

Now we are going to set up an HTTP server that listens on a specified port for incoming requests. We will do that creating a .js file calling it srver.js and moving the old server,js file inside app folder, renaming it app.js. Here's a step-by-step explanation of what the code does:

• The code imports a module called 'debug', which is used for logging debug messages.

• The debug module is used to log a debug message with the name 'comp-229'. This is a way to identify which part of the code is producing the log message.

• The code then imports the built-in 'http' module from Node.js.

• The code imports a module located in the './app/app.js' file, which presumably contains the code that handles incoming HTTP requests.

• The code defines a constant variable named 'PORT', which is either set to the value of the environment variable 'PORT', or to the value 3000 if the environment variable is not set.

• The app object is configured to use the port specified in the 'PORT' variable.

• An HTTP server is created using the 'http.createServer()' method, which takes in the app object as an argument.

• The server is set to listen on the specified port using the 'server.listen()' method.

• The server's 'error' and 'listening' events are handled by the 'onError()' and 'onListening()' functions, respectively.

• The 'normalizePort()' function is defined, which takes in a value and returns either that value (if it's not a number) or the parsed integer value of that string.

• The 'onError()' function is defined, which takes in an error object and handles specific types of errors (such as 'EACCES' and 'EADDRINUSE') with specific messages and actions.

• The 'onListening()' function is defined, which logs a debug message indicating that the server is listening on the specified port.

In summary, this code sets up an HTTP server using Node.js that listens on a specified port for incoming requests, and logs debug messages when certain events occur (such as when the server starts listening). And here is the code required to do so: 

---------------------------------------------------------------------------------------------------------------
                                                     // Import the 'debug' module and log a debug message with the name 'comp-229'

                                                     import debug from 'debug';
                                                     debug('Portfolio');

                                                     // Import the 'http' module

                                                     import http from 'http';

                                                     // Import the app module located in './app/app.js'

                                                     import app from './app/app.js';

                                                     // Define a constant variable named 'PORT', which is either set to the value of the environment variable 'PORT' or to the value 3000 if the environment variable is not set

                                                     const PORT = normalizePort(process.env.PORT || 3000);

                                                     // Configure the app object to use the port specified in the 'PORT' variable

                                                     app.set('port', PORT);

                                                     // Create an HTTP server using the 'http.createServer()' method and passing in the app object as an argument

                                                     const server = http.createServer(app);

                                                     // Set the server to listen on the specified port using the 'server.listen()' method

                                                     server.listen(PORT);

                                                     // Handle the server's 'error' event using the 'onError()' function

                                                     server.on('error', onError);

                                                     // Handle the server's 'listening' event using the 'onListening()' function

                                                     server.on('listening', onListening);

                                                     // Define the 'normalizePort()' function, which takes in a value and returns either that value (if it's not a number) or the parsed integer value of that string

                                                     function normalizePort(val) 
                                                     {
                                                         var port = parseInt(val, 10);
                                                         if (isNaN(port)) 
                                                         {
                                                             return val;
                                                         }
                                                         if (port >= 0) 
                                                         {
                                                             return port;
                                                         }
                                                         return false;
                                                     }

                                                     // Define the 'onError()' function, which takes in an error object and handles specific types of errors with specific messages and actions

                                                     function onError(error) 
                                                     {
                                                         if (error.syscall !== 'listen') 
                                                         {
                                                             throw error;
                                                         }
                                                         let bind = typeof port === 'string'
                                                             ? 'Pipe ' + port
                                                             : 'Port ' + port;
                                                         // handle specific listen errors with friendly messages
                                                     switch (error.code) 
                                                     {
                                                         case 'EACCES':
                                                             console.error(bind + ' requires elevated privileges');
                                                             process.exit(1);
                                                             break;
                                                         case 'EADDRINUSE':
                                                             console.error(bind + ' is already in use');
                                                             process.exit(1);
                                                             break;
                                                         default:
                                                             throw error;
                                                     }
                                                 }

                                                     // Define the 'onListening()' function, which logs a debug message indicating that the server is listening on the specified port

                                                 function onListening() 
                                                 {
                                                   let addr = server.address();
                                                   let bind = 'pipe ' + addr;
                                                   debug('Listening on ' + bind);
                                                 }

---------------------------------------------------------------------------------------------------------------

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
                                        WEEK 3 RECORDING, MINUTE 69:55 
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

TODAY WE WILL INTEGRATE OUR APPLICATION WITH MONGODB LOCALLY, AND TO DO THAT WE WILL USE A LIBRARY ON NODEJS CALLED
MONGOOSE. 

1) RUN MONGOD ON POWERSHELL/CDM, AND LEAVE IT OPEN.

2) LETS NOW OPEN OUR CONGIF.JS FILE AND LETS CONFIGURE THE CONNECTION STRING FROM MONGOSH WITH OUR APPLICATION.
   WE GET THE CONNECTION SGTRING BY RUNNING MONGOSH ON A NEW SHELL UNDER " Connecting to: mongodb://127.0.0.1" AND WE ADD TO THE STRING A "/NAMEOFTHEDATABASE" AT THE END.

3) INSTALL MONGOOSE BY ENTERING "npm install mongoose " ON A NEW TERMINAL INSIDE VISUAL STUDIO CODE.

4) NOW WE NEED TO IMPORT MONGOOSE IN OUR APP.JS FILE ---> import mongoose from "mongoose". WE HAVE NOW OUR LIBRARY INSTALLED IMPORTED IN OUR APPLICATION. AND ADD THIS LINE TO SOLVE THIS DEPRECATION WARNING PROBLEM (DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose):
mongoose.set('strictQuery', true);

5) NOW WE NEED TO SET IT UP/CONFIGURE IT AND WE WILL DO IT INSIDE THE SAME LINE OF OUR SECRET SESSION, LIKE THIS: 
      //CONFIGURATION MODULE
      import { Secret, MONGOURL } from '../config/config.js';

6) WE WILL FINISH UP BY IMPLEMENTING THE MONGOOSE LIBRARY TO CONNECT TO OUR STRINGED DATABASE USING THE CONNECT METHOD "mongoose.connect(MongoURL)" INSIDE APP.JS.

7) WE ARE GOING TO MAKE SURE THAT OUR DATABASE CONNECTION IS ON BY USING THE "db" VARIBLE TO BE EQUAL TO THE "mongoose.connection" METHOD IN THIS WAY--> "const db = mongoose.connection;"

8) NOW WE ARE GOING TO USE THE DB VARIABLE TO SHOW A MESSAGE TO THE CONSOLE SAYING IF IT IS CONNECTED OR NOT IN THIS WAY: "db.on('open', () => console.log("Connected to MongoDB"));".
IF WE HAVE AN ERROR THE CODE WILL BE: "db.on('error', () => console.log("MongoDB Connection ERROR"));"

--------------------------------------------------------------------------------------------------------------

NOW THAT OUR DATABASE IS SET UP, WE ARE GOING TO DEFINE OUR SCHEMA. TO DO SO LET'S CREATE A .JS FILE INSIDE OUR MODELS FOLDER IN WHICH WE WILL CREATE THE SCHEMA, WHICH MEANS HOW MONGO WILL RELATE TO THE DATABASE AND WHAT ARE THE ATTRIBUTES.

1) FIRST LETS IMPORT "import mongoose from "mongoose";" AGAIN INSIDE OUR MODELS FILE.

2) CREATE A VARIABLE THAT WILL REPRESENT OUR SCHEMA CLASS: "const Schema = mongoose.Schema;"

3) CREATE THE ACTUAL SCHEMA CLASS:
                                   const ProductSchema = new Schema(
                                       {
                                         name: String,
                                         email: String,
                                         phoneNumber: Number,
                                         companyName: String,
                                         Message: String
                                       } ,

                                       //AND GIVE MONGOOSE SOME INSTRUCTIONS TO WORK BETTER
                                       {
                                          *timestamps: treu,
                                          *collection: 'contact list'
                                       });

                                       ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
                                       *timestamps will keep track of the time of the changes made;
                                       *collection will give the collection a name.
                                       ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

4) WE NOW EXPORT THE SCHEMA WITH THE MONGOOSE.MODEL FUNCTION:
                                                
                                                 export default mongoose.model('Products', ProductSchema);
                                                ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
                                                This code exports a Mongoose model named 'Products' based on the 'ProductSchema' schema.

                                                The 'mongoose' module is required to define and interact with MongoDB models. Here, 'mongoose.model()' method creates a new model with the name 'Products' and the schema 'ProductSchema'.

                                                The 'ProductSchema' is an object that defines the structure of a document or record in a MongoDB collection. It defines the properties and data types of the document fields, as well as any additional options for the field such as validation rules.

                                                By exporting this model, it can be used in other parts of the application to perform CRUD operations (Create, Read, Update, Delete) on the MongoDB collection associated with this model.
                                                ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
 

NOW WE ARE GOING TO CREATE THE CONTACT LIST PAGES THAT WILL BE USING OUR DATABASE TO STORE THE DATA, AND IT IS BASED ON THE SAME STRUCTURE THAT OUR SCHEMA FOLLOWS (THE EXPLANATION OF HOW THE LOOP WORKS FOR THE MOVIES IS COMMENTED AT THE BOTTOM OF THE EJS PAGE). USE THIS TEMPLATE:

<!-- <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">    
    <link rel="stylesheet" href=" ">
</head> 

<body class="w3-black "> 
<div class="container fontHome">
    <h1 class="center">Contact List</h1>
    <hr>
    <p class="center">If you don't want to send an email you can leave a quick message with your contact info here: </p>
  <br>
  <table class="table table-striped table-bordered table-hover">
                <thead class="table-dark">
                    <tr>
                        <th scope="col" class="text-center">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Short Message</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="contactList">
                    <!-- Repeatable Rows -->                    
<!--                   <% for(let count = 0; count < contacts.length; count++) { %>
                        <tr>
                            <th style="color: azure;" scope="row" class="text-center"><%= count + 1 %></th>
                            <td style="color: azure;"><%= contacts[count].name %></td>
                            <td style="color: azure;"><%= contacts[count].email %></td>
                            <td style="color: azure;"><%= contacts[count].phoneNumber %></td>
                            <td style="color: azure;"><%= contacts[count].companyName %></td>
                            <td style="color: azure;"><%= contacts[count].message %></td>
                            
                            <td class="text-center col-1">
                                <a href="/contactList-edit/<%= contacts[count]._id %>" style="background-color: 00A491; color: aliceblue;"
                                    class="btn btn-sm">
                                    <i class="fas fa-pencil-alt"></i> Edit</a>
                            </td>
                            
                            <td class="text-center col-1">
                                <a href="/contactList-delete/<%= contacts[count]._id %>" style="background-color: 00A491; color: aliceblue;"
                                    class="btn btn-sm">
                                    <i class="fas fa-trash-alt"></i> Delete</a>
                            </td>
                        </tr>
                    <% } %>
                </tbody>
            </table>
            <br>
            <a href="/contactList-add" style="background-color: 00A491; color: aliceblue;" class="btn" role="button">
                Add a Contact</a>
           <div class="row">
               <div class="col">
                   <br>
        </div>
    </div>
</div>
</body> -->

IT IS ALSO NECESSARY TO CREATE AN "edit.ejs" PAGE IN WHICH WE WILL HANDLE THE ADD A NEW CONTACT-PRODUCT ON THE LIST PAGE AND ALSO THE EDITING OF THE LISTED ITEMS. THE CODE STRUCTURE OF THE PAGE WILL LOOK LIKE THIS:

<!-- <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">    
    <link rel="stylesheet" href="./content/app.css">
</head>


<body class="w3-black fontHome">

<div class="container fontHome">
    <div class="row">
        <div class="offset-md-3 col-md-6">
            <h1><%= title %></h1>

            <form class="form" method="POST">
                <input type="hidden" name="id" value="<%= contact._id %>" >
                         <!-- I GET THE "contact".id PART ⬆️⬆️⬆️
                               FROM THIS FUNCTION:
                               export function DisplayContactsAddPage(req, res, next){
                               res.render('index', { title: 'Add Contact', page: 'contactList/edit', contact: {} });                                                                ⬆️⬆️⬆️
                               WHICH IS INSIDE MY "contacts.controller.server.js"
                               } 

                <div class="form-group">
                    <label for="nameTextField">Contact Name </label>
                    <input type="text" class="form-control"
                    id="nameTextField"
                    placeholder="Enter your Name"
                    name="name" 
                    value="<%= contact.name %>"
                    required>
                </div>

                <div class="form-group">
                    <label for="authorTextField">Email</label>
                    <input type="text" class="form-control"
                    id="authorTextField"
                    placeholder="Enter your Email"
                    name="email" 
                    value="<%= contact.email %>"
                    required>
                </div>

                <div class="form-group">
                    <label for="publishedTextField">Phone Number</label>
                    <input type="number" class="form-control"
                    id="phoneTextField"
                    placeholder="Enter your number"
                    name="phoneNumber" 
                    value="<%= contact.phoneNumber %>"
                    required>
                </div>

                <div class="form-group">
                    <label for="descriptionTextArea">Company Name</label>
                    <input type="text" class="form-control"
                    id="companyTextField"
                    placeholder="Enter your company name"
                    name="companyName"                     
                    value="<%= contact.companyName %>"
                    required
                    >
                    </input>
                </div>

                <div class="form-group">
                    <label for="priceTextField">Message</label>
                    <textarea class="form-control" id="msgTextField" placeholder="Enter your message" name="message" required><%= contact.message %></textarea>
                </textarea>
                </div>

                <button class="btn btn-primary" type="submit">
                    <i class="fas fa-edit"></i> Submit</button>
                
                    <a href="/contactList-list" class="btn btn-warning">
                        <i class="fas fa-undo"></i> Cancel</a>

            </form>
        </div>

    </div>
</div>
</body> -->

REMEMBER THE NAME IN THE INPUT FIELD MUST BE THE SAME AS THE ONE IN THE SCHEMA TO BE REGISTERED.

NOW WE NEED TO CREATE TWO SEPARATE CONTROLLER.JS AND ROUTES.JS FILES TO HANDLE THIS TO PAGES. IN THE NEW CONTROLLER FILE WE WILL IMPORT OUR SCHEMA FOR THE PRODUCTS-CONTACTS AND HAVE THE FOLLOWING FUNCTIONS:

-----------------------------------------------------------------------------------------------------------

 import productModel from '../Models/products.js';

export function DisplayProductList(req, res, next){
  productModel.find(function(err, productCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: 'products/list', products: productCollection});
    })
}

export function DisplayProductAddPage(req, res, next){
    res.render('index', { title: 'Add a Product', page: 'products/edit', product: {} });
}

export function ProcessProductAddPage(req, res, next){
    
    let newProduct = productModel({
        productName: req.body.productName,
        productID: req.body.productID,
        quantityAvailable: req.body.quantityAvailable,
        price: req.body.price,
        quantitySold: req.body.quantitySold
    });

    productModel.create(newProduct, (err, Product) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/products-list')
    } )
}



export function DisplayProductEditPage(req, res, next){
    let id = req.params.id;

    productModel.findById(id, (err, product) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Contact', page: 'products/edit', product: product });
    });    
}



export function ProcessProductEditPage(req, res, next){

    let id = req.params.id;
    
    let newProduct = productModel({
        _id: req.body.id,
        productName: req.body.productName,
        productID: req.body.productID,
        quantityAvailable: req.body.quantityAvailable,
        price: req.body.price,
        quantitySold: req.body.quantitySold
    });

    productModel.updateOne({_id: id }, newProduct, (err, Product) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/products-list')
    } )
}



export function ProcessProductDelete(req, res, next){
    let id = req.params.id;

    productModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/products-list');
    })
} 

-----------------------------------------------------------------------------------------------------------

FOR THE NEW ROUTE WE WILL HAVE THESE STRUCTURE THAT IS VERY SIMILAR TO THE OTHER ROUTE STRUCTURE:

-----------------------------------------------------------------------------------------------------------

 import { Router } from "express";

import { DisplayProductList, DisplayProductAddPage, ProcessProductAddPage, DisplayProductEditPage, ProcessProductEditPage, ProcessProductDelete } from "../Controllers/products.controller.server.js";

const router = Router();

router.get('/products-list', DisplayProductList);
router.get('/products-add', DisplayProductAddPage);
router.post('/products-add', ProcessProductAddPage);
router.get('/products-edit/:id', DisplayProductEditPage);
router.post('/products-edit/:id', ProcessProductEditPage);
router.get('/products-delete/:id', ProcessProductDelete);

export default router; 

-----------------------------------------------------------------------------------------------------------


NOW WE NEED TO IMPORT OUR ROUTE INSIDE APP.JS LIKE THIS:
-----------------------------------------------------------------------------------------------------------
                                                         import contactsRouter from './Routes/contacts.route.server.js';
-----------------------------------------------------------------------------------------------------------

AND THEN USE THE ROUTE LIKE THIS:
-----------------------------------------------------------------------------------------------------------
                                  app.use('/', contactsRouter);
-----------------------------------------------------------------------------------------------------------

WE ALSO NEED TO WIRE UP OUR "header.ejs" WITH THE NEW PATH FOR THE LIST.EJS FILE:
-----------------------------------------------------------------------------------------------------------            <li class="nav-item">
            <a class="nav-link <%= (page == 'contactList-list') ? 'active' : ''; %>" aria-current="page" href="/contactList-list"> Contact List</a>
          </li>           
-----------------------------------------------------------------------------------------------------------

REMEMBER TO ALWAYS RUN "mongod" ON POWERSHELL WHEN USING MONGODB LOCALLY AND CLICKING ON CONTACT LIST.

TO MANAGE DATA ON UR CONTACT LIST PAGE USING MONGOSHELL, WE NEED TO USE THE COMMAND "use + name of the database". IN OUR CASE WE WILL ENTER "USE MEDIA", AND TO CHECK FOR THE COLLECTION WE NEED TO SEE WHAT COLLECTION WW USED INSIDE OUR MODEL EJS PAGE. WE CALLED OUR COLLECTION 'contacts', SO WE WILL USE COMMAND "db.contacts.insertOne({name:"carla", email:"carla@email.com", phoneNumber: 6474097856, companyName: "Asilo", message: "ciaone"});". 
IF WE USED OUR COLLECTION NAMED "contacts" THIS SHOULD WORK AND MANIPULATE OUR DATA FROM MONGO SHELL.

TRY NOT TO DELETE FROM THE CONTACT LIST PAGE IF YOU ARE GOING TO USE MONGOSHELL TO MANAGE THE DATABASE, YOU MAY NEED TO RELOAD "mongod" MATRIX AND RESTART THE APPLICATION.
-------------------------------------------------------------------------------------------------------------

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
                                                WEEK 5
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

                                         MONGO ATLAS

NOW WE ARE GOING TO LEARN HOW TO USE MONGO ON SERVER AND FORGET ABOUT MONGO LOCALLY. SO WE CREATE OUR ACCOUNT ON 'https://account.mongodb.com/account/login' AND WE CREATE OUR CLUSTER BY CLICKING ON CREATE (AT LEAST ONE CLUSTER SHOULD BE FREE). TO CONNECT TO MONGO ATLAS, INSTEAD OF USING THE LOCAL MONGOURL, WE REPLACE IT WITH THE CONNECTION STRING THAT CAN BE FOUND BY CLICKING ON CONNECT ON THE TOP LINE OF OUR CLUSTER AND CLICK ON CONNECT YOUR APPLICATION. FOR EXAMPLE THIS IS THE CLUSTER I RECENTLY CREATED: "mongodb+srv://<username>:<password>@rrsystems.hqtty7k.mongodb.net/?retryWrites=true&w=majority". WHEN REPLACING MONGO LOCAL URL, I WILL PLACE THIS AND CHANGE USERNAME AND PASSWORD WITH THE USERNAME AND PASSWORD CREATED ON THE CLUSTER. AND AFTER "mongodb.net/?" BETWEEN "/" AND "?" I WILL PLACE THE NAME OF THE DATABASE THAT I AM GOING TO USE. THE COLLECTION WILL BE THE ONE DEFINED INSIDE OUR SCHEMA AND IS GOING TO BE ADDED AUTOMATICALLY TO OUR ATLAS CLUSER, SO WE CAN JUST GO INSIDE "contact.js" FILE AND CHANGE THE COLLECTION NAME TO CREATE A NEW ONE.

-----------------------------------------------------------------------------------------------------------
                                             AUTHENTICATION
-----------------------------------------------------------------------------------------------------------

WE ARE GOING TO INITIATE OUR AUTHENTICATION PROCESS, TROUGH WHICH WE ARE GOING TO BE ABLE TO SECURE ACCESS TO PARTS OF OUR APPLICATION. 

STEP 1
 INSTALL THESE PACKAGES: npm install passport connect-flash morgan passport-local passport-local-mongoose

STEP 2
 LET'S CREATE OUR 'user.js' PAGE THAT WILL HANDLE OUR USER SCHEMA, THAT WILL DEFINE THE PARAMETERS FOR THE LOGIN PAGE, LIKE THIS:

-----------------------------------------------------------------------------------------------------------

                                    import mongoose from "mongoose";
                                    import passportLocalMongoose from 'passport-local-mongoose';
                                    const { PassportLocalSchema } = mongoose;
                                    const Schema = mongoose.Schema;

                                    const UserSchema = new Schema({
                                        displayName: String,
                                        username: String,
                                        emailAddress: String
                                    },{
                                        timestamps:true,
                                        collection: 'users'
                                    });

                                    UserSchema.plugin(passportLocalMongoose);

                                    export default mongoose.model('User', UserSchema);

-----------------------------------------------------------------------------------------------------------

YOU MIGHT ASK YOURSELF WHY THERE IS NO PASSWORD PARAMETER IN THE SCHEMA AND HOW IT IS STILL SAVED BY MONGO:

The reason why the password is being saved by Mongo even though there is no parameter for it in the User schema is that the passport-local-mongoose LIBRARY is being used in the schema. This LIBRARY provides a pre-defined authentication strategy that includes password hashing and salting.

When a user registers and enters a password in the register.ejs form, passport-local-mongoose automatically hashes and salts the password before storing it in the database. This is done by the plugin's passportLocalMongoose method that adds a username, hash, and salt field to the schema. These fields are used for authentication purposes when a user tries to log in later.

So even though the password field is not explicitly defined in the User schema, it is still being handled by the passport-local-mongoose plugin, because simply the only thing that the library does it understands that the specific field is the password field, by looking at its "name = password" attribute inside the <input> tag.

-----------------------------------------------------------------------------------------------------------

STEP 3
 WE ARE NOW GOING TO SET UP THE AUTHENTICATION STEPS INSIDE "app.js" FILE (STEP 1 TO STEP 8), LIKE THIS:

-----------------------------------------------------------------------------------------------------------
                            // Auth Step 1 - import modules
                            import passport from 'passport';
                            import passportLocal from 'passport-local';
                            import flash from 'connect-flash';

                            // Auth Step 2 - define our auth strategy
                            let localStrategy = passportLocal.Strategy;

                            // Auth Step 3 - import the user model
                            import User from './models/user.js';

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
-----------------------------------------------------------------------------------------------------------

STEP4
 LET'S NOW CREATE OUR LOGIN.EJS AND REGISTRATION PAGES THAT WE WILL NEED TO ADD TO OUR HEADER AND WIRE UP INSIDE TWO NEW CONTROLLERS AND ROUTES.

 LOGIN IN PAGE STRUCTURE:

-----------------------------------------------------------------------------------------------------------
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">    
</head>
<body class="w3-black">
 <div class="container w3-black">
    <div class="row">
      <div class="offset-md-3 col-md-6 col-sm-12">
            <div class="login" id="contentArea">
                <h1 class="display-4">Login</h1>
  
                 Message Area 
                 <% if(messages.length > 0) { %>
                  <div id="messageArea" class="alert alert-danger">
                  <%= messages %>
                </div>
                <% } %>
  
                <form method="POST" id="loginForm" novalidate>
                  <div class="form-group mb-2">
                    <div class="input-group">
                      <span class="input-group-addon icon-margin">
                        <i class="fa fa-user">
                        </i>
                      </span>
                      <input type="text" class="form-control" id="username" name="username"  required
                      value="" placeholder="Enter your username">
                    </div>
                  
                  </div>
  
                  <div class="form-group mb-2">
                    <div class="input-group">
                      <span class="input-group-addon icon-margin">
                        <i class="fa fa-lock">
                        </i>
                      </span>
                      <input type="password" class="form-control" id="password" name="password"  required
                      value="" placeholder="Enter your password">
                    </div>
                  
                  </div>                                        
                  <div class="text-end">
                    <button id="loginButton" type="submit" class="btn main-btn btn-primary btn-lg">
                      <i class="fas  fa-sign-in-alt"></i> Login</button>
                      <button id="cancelButton" type="reset" class="btn main-btn btn-warning btn-lg">
                        <i class="fas fa-undo"></i> Cancel</button>
                  </div>
                </form>
              
            </div>
            <p class="text-center text-muted small">
              Don't have an account? 
              <a class="link" href="/register">Register Here!</a>
            </p>
      </div>
    </div>
  </div>
</body>  

-----------------------------------------------------------------------------------------------------------

REGISTER PAGE STRUCTURE:

-----------------------------------------------------------------------------------------------------------

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">    
</head>
<body class="w3-black">
 <div class="container">
    <div class="row">
      <div class="offset-md-3 col-md-6 col-sm-12">
            <div class="login" id="contentArea">
                <h1 class="display-4">Register</h1>
  
              <!-- Message Area -->
              <% if(messages.length > 0) { %>
                <div id="messageArea" class="alert alert-danger">
                  <%= messages %>
                </div>
                <% } %>
  
                <form method="POST" id="registerForm" novalidate>
                  <p class="hint-text">Create your account here.</p>
  
                  <div class="form-group">
                    <div class="row">
                      <p class="lead"><i class="fas fa-user-shield"></i> Personal Information</p>
                      <div class="col-md-6">
                        <input class="form-control" type="text" name="firstName" id="firstName" placeholder="First Name" required>
                      </div>
                      <div class="col-md-6">
                        <input class="form-control" type="text" name="lastName" id="lastName" placeholder="Last Name" required>
                      </div>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-12">
                        <input type="email" class="form-control" id="emailAddress" name="emailAddress" required
                        value="" placeholder="Email">
                      </div>
                    </div>
                  </div>
  
                  <div class="form-group mt-4">
                    <div class="row">
                      <p class="lead"><i class="fas fa-database"></i> System Identification</p>
                      <div class="col-md-12">
                        <input type="text" class="form-control" id="username" name="username"  required
                        value="" placeholder="Username">
                      </div>
                    </div>
                  </div>
  
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-12">
                        <input type="password" class="form-control" id="password" name="password"  required
                        value="" placeholder="Password">
                      </div>
                    </div>
                  </div>
  
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-12">
                        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword"  required
                        value="" placeholder="Confirm Password">
                      </div>
                    </div>
                  </div>
                                                      
                  <div class="text-end mt-2">
                    <button id="submitButton" type="submit" class="btn main-btn btn-primary btn-lg">
                      <i class="fas fa-user-plus"></i> Register</button>
                    <button id="cancelButton" type="reset" class="btn main-btn btn-warning btn-lg">
                      <i class="fas fa-undo"></i> Cancel</button>
                  </div>
                </form>
              
            </div>
            <p class="text-center text-muted small">
              Already have an account? 
              <a class="link" href="/login">Sign in</a>
            </p>
      </div>
    </div>
  </div>
</body>

-----------------------------------------------------------------------------------------------------------

CONTROLLER FOR LOGIN/REGISTRATION:

-----------------------------------------------------------------------------------------------------------

                                import express from 'express';

                                // need passport 
                                import passport from 'passport';

                                // need to include the User Model for authentication
                                import User from '../models/user.js';

                                // import DisplayName Utility method
                                import { UserDisplayName } from '../Utils/index.js'

                                // Display Functions
                                export function DisplayLoginPage(req, res, next){
                                    if(!req.user)
                                    {
                                        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
                                    }

                                    return res.redirect('/contactList-list');
                                }

                                export function DisplayRegisterPage(req, res, next){
                                    if(!req.user)
                                    {
                                        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req)});
                                    }

                                    return res.redirect('/contactList-list');
                                }

                                // Processing Function
                                export function ProcessLoginPage(req, res, next){
                                    passport.authenticate('local', function(err, user, info) {
                                        if(err){
                                            console.error(err);
                                            res.end(err);
                                        }     
        
                                        if(!user){
                                            req.flash('loginMessage', 'Authentication Error');
                                            return res.redirect('/login');
                                        }

                                        req.logIn(user, function(err){
                                            if(err){
                                                console.error(err);
                                                res.end(err);
                                            }

                                            return res.redirect('/');

                                        })
        
                                    })(req, res, next);
                                }

                                export function ProcessRegisterPage(req, res, next){
                                    let newUser = new User({
                                        username: req.body.username,
                                        emailAddress: req.body.emailAddress,
                                        displayName: req.body.firstName + " " + req.body.lastName
                                    });

                                    User.register(newUser, req.body.password, function(err){
                                        if(err){
                                            if(err.name == "UserExistsError"){
                                                console.error('ERROR: User Already Exists!');
                                                req.flash('registerMessage', 'Registration Error')
                                            } else {
                                                console.error(err.name);
                                                req.flash('registerMessage', 'Server Error')
                                            }
            
                                            return res.redirect('/register');
                                        }

                                        return passport.authenticate('local')(req, res, function()
                                        {
                                            return res.redirect('/');
                                        });
                                    });
                                }

                                export function ProcessLogoutPage(req, res, next){
                                    req.logOut(function(err){
                                        if(err){
                                            console.error(err);
                                            res.end(err);
                                        }

                                        console.log("user logged out successfully");
                                    });

                                        res.redirect('/login');
                                }

This is a JavaScript module that exports several functions related to user authentication using Passport and an Express server. Here is an overview of what each function does:

DisplayLoginPage: Renders the login page if the user is not already logged in, otherwise redirects them to the contact list page. Uses the UserDisplayName function from a utility module to pass the user's display name to the view.

DisplayRegisterPage: Renders the registration page if the user is not already logged in, otherwise redirects them to the contact list page. Uses the UserDisplayName function to pass the user's display name to the view.

ProcessLoginPage: Processes a POST request containing login credentials. Uses the Passport authenticate method with the local strategy to verify the credentials. If authentication fails, sets a flash message and redirects to the login page. If authentication succeeds, logs the user in using the logIn method on the request object and redirects to the home page.

ProcessRegisterPage: Processes a POST request containing registration information. Creates a new user object using the User model and the data from the request body. Registers the user using the register method provided by Passport-local-mongoose. If registration fails due to an existing user, sets a flash message and redirects to the registration page. If registration succeeds, logs the user in using the authenticate method and redirects to the home page.

ProcessLogoutPage: Logs the user out using the logOut method on the request object and redirects to the login page.

-----------------------------------------------------------------------------------------------------------

ROUTE FOR LOGIN/REGISTRATION:

-----------------------------------------------------------------------------------------------------------

                                import {Router} from 'express';
                                import { DisplayLoginPage, 
                                    DisplayRegisterPage, 
                                    ProcessLoginPage,
                                    ProcessLogoutPage,
                                    ProcessRegisterPage} from '../Controllers/auth.controller.server.js'

                                const router = Router();

                                // Display Login Page
                                router.get('/login', DisplayLoginPage);
                                // Process Login Page
                                router.post('/login', ProcessLoginPage);


                                // Display Registration Page
                                router.get('/register', DisplayRegisterPage);
                                // Process Registration page
                                router.post('/register', ProcessRegisterPage);

                                // Process Logout Page
                                router.get('/logout', ProcessLogoutPage);

                                export default router;

-----------------------------------------------------------------------------------------------------------

HEADER FUNCTIONING LOGIN BUTTON:

-----------------------------------------------------------------------------------------------------------

              <li class="nav-item">
                <a class="nav-link <%= (page == 'login') ? 'active' : ''; %>" aria-current="page" href="/login"> Login</a>
              </li>

-----------------------------------------------------------------------------------------------------------

INSIDE APP.JS WE NOW IMPORT AND USE OUR NEW ROUTE:

-----------------------------------------------------------------------------------------------------------
                                           import authRouter from './Routes/auth.route.server.js';

                                           app.use('/', authRouter);

-----------------------------------------------------------------------------------------------------------

STEP 7
 WE WILL CREATE TWO HELPER FUNCTIONS TO BE ABLE TWO USE PASSPORT AUTHENTICATION. SO LETS CREATE OUR UTILS FOLDER INSIDE OUR APP FOLDER AND WE WILL ADD A .js FILE WITH THE FOLLOWIG FUNCTIONS: 
                                                                              export function UserDisplayName(req)
                                                                              {
                                                                              if(req.user)
                                                                                  {
                                                                                    return req.user.displayName;
                                                                                  }
                                                                                    return '';
                                                                              }

                                                                              export function AuthGuard(req, res, next)
                                                                              {
                                                                                  if(!req.isAuthenticated())
                                                                                  {
                                                                                    return res.redirect('/login')
                                                                                  }
                                                                                   next();
                                                                              }

AND I WANT TO USE THE UTILS FUNCTIONS INSIDE ALL CONTROLLERS FUNCTIONS THAT ARE RELATED TO DISPLAYING EJS PAGES. AND I WILL PASS THIS:

                                      'displayName: UserDisplayName(req)'

LIKE THIS:

                                      export function displayHomePage(req,res,next)
                                      {
                                         res.render('index', {title : 'RR Systems Home', page:'home', displayName: UserDisplayName(req) }); 
                                      }

AND REMEMBER TO IMPORT THE UTILS FILE EVEN INSIDE THE 'index.controllers.server.js' FILE LIKE THIS:

                               import { UserDisplayName } from "../Utils/index.js";
                               
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
UserDisplayName(req): This function takes in a req object (which represents an incoming HTTP request) and returns the display name of the authenticated user, if there is one. If there is no authenticated user, the function returns an empty string.
In the function, the req object is checked to see if there is a user property (which would be set by passport if there is an authenticated user). If there is, the function returns the value of the displayName property of the user object. If there isn't, it returns an empty string.

AuthGuard(req, res, next): This function is an authentication middleware that can be used to protect routes that require authentication. It takes in three arguments: the req object, the res object (which represents the HTTP response), and a next function that should be called if the user is authenticated and should be allowed to access the protected route.
In the function, the req object is checked to see if the user is authenticated using the req.isAuthenticated() method provided by passport. If the user is not authenticated, the function redirects the user to the login page by calling res.redirect('/login'). If the user is authenticated, the function calls the next function to allow the request to proceed to the protected route.

Together, these functions can be used to display the authenticated user's display name (if there is one) and to protect routes that require authentication.
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

-----------------------------------------------------------------------------------------------------------

REMEMBER TO IMPORT IN THE 'auth.controller.server.js' THE TWO FUNCTIONS IN THE FILE AND THE USER MODEL LIKE THIS:

------------------------------------------------------------------------------------------------------------

import User from '../models/user.js';

------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------

import { UserDisplayName } from '../Utils/index.js'

------------------------------------------------------------------------------------------------------------

NOW DEPENDING ON WHAT PAGE WE WANT TO AUTHENTICATE, WE WILL MODIFY OUR HEADER THIS WAY (WE ARE ASSUMING WE WANT TO AUTHENTICATE THE LIST AND EDIT PAGE):

------------------------------------------------------------------------------------------------------------
                                              <% if(displayName) { %>

            <li class="nav-item">
              <a class="nav-link <%= (page == 'contactList-list') ? 'active' : ''; %>" aria-current="page" href="/contactList-list"> Contact List</a>
            </li> 
    
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/logout"> Logout</a>
            </li>
            <% } else { %>
              <li class="nav-item">
                <a class="nav-link <%= (page == 'login') ? 'active' : ''; %>" aria-current="page" href="/login"> Login</a>
              </li>
            <% } %>

------------------------------------------------------------------------------------------------------------

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
                                                WEEK 6
                                        JWT(JASON WEB TOKEN)
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

NOW IF WE GO TO OUR MONGO ATLAS WE WILL SEE THAT WHEN CHECKING THE USER DATABASE WE HAVE THE FOLLOWING INFORMATION:

                            
                                _id: objectId ('63fa8698a686b2bd0b1296a1')
                                displayName: "riccado reali"
                                username: "Rick123"
                                emailAddress: "riccardoreali05@gmail.com"
                                salt: "d71096ebdb926c34c11a16c99263dbd593577cbb525dfb31336a96179ff4fbd8"
                                hash: "a5d5d3da7f5f6d6e7aafb7c2a1e8a6ce0d4b6dfe4972eca7822022e11051d8ca264512…"
                                createdAt: 2023-02-25T22:07:20.691+00:00
                                updatedAt: 2023-02-25T22:07:20.691+00:00
                                __v: 0

WHAT ARE SALT AND HASH? THAT IS THE PASSWORD BEING ENCRYPTED, THAT MEANS THAT EVEN ME BEING AN ADMINISTRATOR I CANNOT SEE WHAT THE PASSWORD IS.


IT IS A WAY TO ECNRYPY JASON DATA (ESPECIALLY FOR LOGIN, PASSWORDS, ETC.) THAT WILL BE CONVERTED INTO GIBBERISH TO BE IMPOSSIBLE TO DECRYPT.

FIRST STEP WILL BE TO INSTALL SOME MODULES IN ORDER TO USE JWTS: "npm install cors passport-jwt jsonwebtoken --save"

SECOND STEP WE NEED TO ADD OUR NEW PACKAGES/MODULES TO OUR APP.JS AT VOICE "//MODULES FOR JTW SUPPORT":

                                      //MODULES FOR JTW SUPPORT
                                      import cors from 'cors';
                                      import passportJWT from "passport-jwt";

                                      //define strategy for JWT
                                      let JWTStrategy = passportJWT.Strategy; 

                                      let ExtractJWT = passportJWT.ExtractJwt;

SECONDLY WE WILL ADD THE "Cors" MIDDLEWARE TO OUR APPLICATION, RIGHT BEFORE STEP 4:
                                                                 app.use(cors());

💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬
WE MUST REMEMBER THAT COURSE IT IS NOT SAFE TO USE IN PRODUCTION:

Although CORS is a powerful feature that allows web developers to build more flexible and interactive web applications, enabling it in a production environment can introduce security vulnerabilities if not configured correctly.

When CORS is enabled, it allows any domain to make requests to the server's resources unless explicitly configured otherwise. This means that an attacker could use a malicious website to send requests to the server, potentially exposing sensitive data or executing actions on behalf of the user.

To mitigate this risk, developers need to carefully configure their CORS settings to only allow requests from trusted domains and methods. In production environments, it's recommended to use a reverse proxy or API gateway to handle CORS, rather than enabling it directly in the application code.

By using a reverse proxy or API gateway, developers can apply a set of pre-defined rules to incoming requests to limit the allowed methods, headers, and origins. This approach provides an extra layer of security and allows developers to manage CORS settings in a centralized way.


In software development, "production" refers to the environment where a software application is running and serving real users. This environment is distinct from development and testing environments, where software is built and tested before it is deployed to production.

The production environment is typically a server or cluster of servers that are optimized for performance, availability, and security. In this environment, the software is expected to be reliable, stable, and efficient, and any errors or issues that arise can have significant consequences for the users and the organization.

Developers and operations teams need to carefully manage and monitor the production environment to ensure that the software is running smoothly and that any problems are quickly detected and resolved. This includes tasks such as configuring servers, monitoring logs, updating software, and scaling resources to handle changing traffic patterns.

To reduce the risk of errors and downtime in the production environment, software is often released in stages, with new features or updates first deployed to a subset of users for testing before being rolled out to everyone. This approach allows developers to catch issues early and fix them before they impact a large number of users.

💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬

NOW WE NEED TO SETUP THE JTW OPTIONS INSIDE OUR APP.JS:

----------------------------------------------------------------------------------------------------------------------------------------
                                                        let jwtOptions = 
                                                        {
                                                            jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
                                                            secretOrKey : Secret
                                                        }
----------------------------------------------------------------------------------------------------------------------------------------

The options you have defined specify how your application will extract and verify JWTs.

Here is a breakdown of each option:

1. jwtFromRequest: This option specifies how to extract the JWT from the incoming request. In this case, ExtractJWT.fromAuthHeaderAsBearerToken() is used, which means that the JWT will be extracted from the Authorization header of the request, as a bearer token.

2. secretOrKey: This option specifies the secret or key used to sign and verify the JWT. It should be the same secret or key used to sign the JWT during authentication.

By setting these options, your application will be able to extract and verify JWTs from incoming requests, which can be useful for implementing stateless authentication and authorization mechanisms.


AND NOW WE NEED TO IMPLEMENT OUR STRATEGY: 
                                           
-----------------------------------------------------------------------------------------------------------------------------------------
                                           let strategy = new JWYStrategy(jwtOptions, (jwt_payload, done) => 
                                           {
                                             User.findiById(jwt_payload.id)
                                               .then(user => 
                                               {
                                                return done(null, user);
                                               })
                                               .catch(err =>
                                               {
                                                return done(err, false);
                                               });
                                           })
-----------------------------------------------------------------------------------------------------------------------------------------

You are creating a new JWT authentication strategy using the JWYStrategy provided by the passport-jwt package. The need for implementing a JWT authentication strategy using Passport.js and the passport-jwt package is to provide a secure and stateless authentication mechanism for your web application.

Here's how this implementation works:

jwtOptions: This object contains the options for extracting and verifying the JWT, as discussed in the previous question.

The second argument to the JWYStrategy constructor is a callback function that will be called when a JWT is successfully verified. This function takes two arguments:

jwt_payload: The payload of the verified JWT, which typically contains information about the authenticated user.
done: A function to be called when the authentication process is complete. This function should be called with two arguments: an error (if any) and a user object (if authentication was successful).
Within the callback function, you are using the User.findById method to retrieve the user associated with the JWT's id property. If a user is found, you are returning it as the second argument to done. If an error occurs during the lookup, you are returning the error as the first argument to done and false as the second argument to indicate that authentication failed.

By implementing the strategy in this way, you can use it with Passport.js to authenticate incoming requests based on the JWT provided in the Authorization header. When a JWT is successfully verified, Passport will call the done function with the user object, which will be added to the req.user property for use in subsequent middleware and route handlers.

💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬
                                                    -EASY TO UNDERSTAND EXAMPLE: -

Imagine you are playing with your toys and your friend wants to join in the game. But how do you know that it's really your friend and not a stranger pretending to be your friend? You need a way to check if it's really your friend.

Similarly, when someone sends a request to your web application, you need to make sure that they are who they say they are. You can use something called a JWT to check this.

A JWT is like a secret code that only your friend (the user) and your web application know. The user sends the JWT with their request in a special header called the "Authorization" header. When your web application receives the request, it checks the JWT to make sure it's valid and that the user is who they say they are.

To do this, you need to set up something called a "strategy" using a package called Passport.js. The strategy is like a set of instructions that tells your web application how to check the JWT and make sure it's valid.

Once the strategy is set up, Passport.js can use it to check the JWT on incoming requests. If the JWT is valid, Passport.js will call a special function called "done" and pass it some information about the user, like their name or ID. This information is stored in a special property called "req.user".

You can then use this information in your web application to do things like show personalized content or restrict access to certain parts of the application.
💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬💬

AND THEN WE NEED TO ADD THIS STRATEGY TO PASSPORT LIKE THIS:
                                                             
                                                             passport.use(strategy);

THIS LETS PASSPORT KNOW THAT THE STRATEGY IS AVAILABLE.

NEXT STEP IS TO CREATE A FOLDER UNDER OUR ROUTES AND CALL IT 'API', IN WHICH WE WILL CREATE OUR 'auth-api.route.server.js' FILE. IN THIS FILE I WILL ADD 3 ROUTES TO PROCESS THE LOGIN, THE REGISTRATION AND THE LOGOUT, LIKE THIS:

-------------------------------------------------------------------------------------------------------------------
                                                  import { Router } from "express";
                                                  import { processLogin, processRegistration, processLogout } from "../../controllers/api/auth-api.controller.server.js";

                                                  const router = Router();

                                                  router.post('/login', processLogin);
                                                  router.post('/register', processRegistration);
                                                  router.get('/logout', processLogout);

                                                  export default router;
-------------------------------------------------------------------------------------------------------------------

AT THIS POINT WE WILL IMPORT THE ROUTES IN OUR APP.JS FILE LIKE THIS:

                                                                      import apiRoute from './Routes/api/auth-api.router.js';

AND WE WILL MAKE SURE THE ROUTE IS USED BY OUR APPLICATION LIKE THIS:
                                                                      
                                                                      app.use('/api', apiRoute);


NOW LET'S CREATE THOSE FUNCTIONS INSIDE A NEW CONTROLLERS FOLDER FOR OUR API CALLED 'auth-api.controller.server.js'

IN THIS FLE WE WILL IMPORT PASSPORT AND OUR USER MODEL FIRST LIKE THIS:
                                                                        import passport from "passport";
                                                                        import userModel from '../../models/user.js';

BUT BEFORE WE PROCEDE WE MUST IMPLEMENT THE TOKEN INSIDE OUR UTILS/INDEX.JS FILE:
                                                              
                                                               import jwt from 'jsonwebtoken';
                                                               import { Secret } from '../../config/config.js';

                                                               export function GenerateToken(user)
                                                               {
                                                                   const payload = 
                                                                   {
                                                                       id: user._id, 
                                                                       displayName: user.displayName,
                                                                       username: user.username,
                                                                       emailAddress: user.emailAddress
                                                                   }

                                                                   const jwtOption = 
                                                                   {
                                                                       expiresIn: 604800 // 1 week
                                                                   }

                                                                   return jwt.sign(payload, Secret, jwtOption);
                                                               }

This code is a function that generates a JSON Web Token (JWT) using the jsonwebtoken library and some user information.

Let's break it down step by step:

import jwt from 'jsonwebtoken';: This line imports the jsonwebtoken library so that we can use its sign() function to create the JWT.

import { Secret } from '../../config/config.js';: This line imports the Secret constant from a separate configuration file. The Secret is used as the secret key to sign the JWT.

export function GenerateToken(user): This line exports a function called GenerateToken that takes a user object as an argument. This function will generate the JWT using information from the user object.

const payload = { id: user._id, displayName: user.displayName, username: user.username, emailAddress: user.emailAddress }: This line creates a payload object containing the user information that will be encoded into the JWT. In this case, the payload includes the user's ID, display name, username, and email address.

const jwtOption = { expiresIn: 604800 }: This line creates a jwtOption object that specifies how long the JWT will be valid for. In this case, the JWT will be valid for 1 week (604800 seconds).

return jwt.sign(payload, Secret, jwtOption);: This line generates the JWT using the sign() function from the jsonwebtoken library. The function takes three arguments: the payload object containing the user information, the Secret key used to sign the JWT, and the jwtOption object containing options for the JWT. The function returns the generated JWT.

Overall, this function is used to generate a JWT that can be sent to the client and used to authenticate the user for a period of 1 week.

WE CAN NOW GO BACK TO OUR CONTROLLER AND FIRST IMPORT OUR 'GenerateToken' FUNCTION LIKE THIS:
                                                                                 
                                                            import { GenerateToken } from "../../utils/index.js";

NOW WE CAN IMPLEMENT THE THREE FUNCTIONS THAT ARE NEEDED FOR OUR API-AUTH.ROUTER FILE LIKE THIS:

                                                    export function processLogin(req, res, next){
                                                        passport.authenticate('local', (err, user, info) => {
                                                            // are there any errors?
                                                            if(err){
                                                                console.error(err);
                                                                res.end(err);
                                                            }

                                                            // are there any login errors?
                                                            if(!user){
                                                                return res.json({
                                                                    success: false,
                                                                    msg: 'ERROR: Authenticatoin Failed'
                                                                })
                                                            }
                                                            req.logIn(user, (err) => {
                                                                // are there any errors?
                                                                if(err){
                                                                    console.error(err);
                                                                    res.end(err);
                                                                }
                                                                const authToken = GenerateToken(user);

                                                                return res.json({
                                                                    success: true, 
                                                                    msg: 'User Logged In Successfully',
                                                                    user: {
                                                                        id: user._id,
                                                                        displayName: user.displayName,
                                                                        username: user.username,
                                                                        emailAddress: user.emailAddress
                                                                    },
                                                                    token: authToken
                                                                })
                                                            })
                                                        })(req, res, next);
                                                    }

                                                    export function processRegistration(req, res, next){
                                                        let newUser = new userModel({
                                                            ...req.body
                                                        });
                                                        console.log(newUser);
                                                        userModel.register(newUser, req.body.password, (err) => {
                                                            if(err){
                                                                console.error(err);           

                                                                return res.json({
                                                                    success: false,
                                                                    msg: 'Error Registration Failed'
                                                                });
                                                            }
                                                            //all ok
                                                            return res.json({
                                                                success: true,
                                                                msg: 'User Registered Successfully'
                                                            });
                                                        })
                                                    }

                                                    export function processLogout(req, res, next){
                                                        req.logOut((err) => {
                                                            if(err){
                                                                console.error(err);
                                                                res.end(err);
                                                            };
                                                        });
                                                        res.json({
                                                            success:true,
                                                            msg: 'User logged out successfully'
                                                        })
                                                    }

EXPLANATION STEP BY STEP: 
 
1. 
----------------------------------------------
export function processLogin(req, res, next){

----------------------------------------------
This line declares and exports the processLogin function, which takes the req, res, and next arguments.

2.
---------------------------------------------------------
    passport.authenticate('local', (err, user, info) => {
----------------------------------------------------------
This line calls passport.authenticate() with the 'local' strategy, and passes in a callback function that takes three arguments: err (the error, if any), user (the authenticated user object), and info (additional authentication information, if any).

3.
----------------------------------------------
        if(err){
            console.error(err);
            res.end(err);
        }
----------------------------------------------
These lines check if there is an error during authentication, and if so, log the error and end the response with the error message.

4.
-----------------------------------------------------
        if(!user){
            return res.json({
                success: false,
                msg: 'ERROR: Authenticatoin Failed'
            })
        }
-----------------------------------------------------
These lines check if authentication is unsuccessful, and if so, send a JSON response indicating that authentication failed.

5.
-----------------------------------------------------
        req.logIn(user, (err) => {
-----------------------------------------------------
This line logs in the user with the req.logIn() function, passing in the user object and a callback function that takes an error argument, if any.

6.
-----------------------------------------------------
            if(err){
                console.error(err);
                res.end(err);
            }
-----------------------------------------------------
These lines check if there is an error during login, and if so, log the error and end the response with the error message.

7.
-----------------------------------------------------
            const authToken = GenerateToken(user);

            return res.json({
                success: true, 
                msg: 'User Logged In Successfully',
                user: {
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    emailAddress: user.emailAddress
                },
                token: authToken
            })
-----------------------------------------------------
These lines generate a JWT token using the GenerateToken() function, and send a JSON response indicating success with the user's information and the JWT.

8.
-----------------------------------------------------
    })(req, res, next);
}

-----------------------------------------------------
This line closes the passport.authenticate() call and passes in the req, res, and next arguments.

9.
-----------------------------------------------------
processRegistration(req, res, next)
-----------------------------------------------------

This function registers a new user with the system. It takes three arguments: req (the request object), res (the response object), and next (the next middleware function to call). It creates a new userModel object with the user's information, and then calls the userModel.register() function to register the new user. If registration is successful, it sends a JSON response indicating success. If registration fails, it sends a JSON response indicating failure.

10.
-----------------------------------------------------
processLogout(req, res, next)
-----------------------------------------------------

This function logs out the currently logged-in user. It takes three arguments: req (the request object), res (the response object), and next (the next middleware function to call). It calls req.logOut() to log out the user, and then sends a JSON response indicating success.

