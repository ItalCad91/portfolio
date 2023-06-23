import { UserDisplayName } from "../Utils/index.js";

/*
The EXPORT keyword is used in JavaScript to export functions, objects, or values from a module so that they can be used in other modules. In this code, the export keyword is used to export the helloWorld function from the module it is defined in. This means that the helloWorld function can be imported and used in other modules. To use the function we need to use "import {name of the function} from './index.controller.server" in another module. ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
*/

// These 2 functions are responsible for handling incoming HTTP requests and returning the appropriate response. ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

 /*⬆️*/export function displayHomePage(req,res,next)
{
   res.render('index', {title : 'Home', page:'home', displayName: UserDisplayName(req) }); // RENDERS THE EJS TEMPLATE CALLED INDEX
}


export function displayAboutPage(req,res,next)
{
   res.render('index', {title : 'About', page:'about', displayName: UserDisplayName(req) });
}

export function displayProjectsPage(req,res,next)
{
   res.render('index', {title : 'Projects', page:'projects', displayName: UserDisplayName(req) });
}


export function displayContactPage(req,res,next)
{
   res.render('index', {title : 'Contact', page:'contact', displayName: UserDisplayName(req) });
}



// {title : 'Home'} I ALSO CREATE JASON VARIABLE TO GIVE MY PAGES A NAME

/* 
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
• req (short for request) is an object that contains information about the incoming request, such as the URL, headers, query parameters, etc.

• res (short for response) is an object that is used to send the response back to the client. It provides methods for setting headers, writing the response body, and other related tasks.

• next is a reference to the next middleware function in the pipeline. In Express, a middleware function is a function that has access to the request and response objects, and can modify or extend their behavior. If the current middleware function does not need to perform any asynchronous operations, it can call next to pass control to the next middleware function in the pipeline. If the current middleware function needs to perform an asynchronous operation, it should not call next until that operation is complete.
*/
