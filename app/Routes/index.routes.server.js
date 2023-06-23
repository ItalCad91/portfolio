import { Router } from "express";

/* ⬆️
The Router class is a part of the express module and provides a way to create modular and mountable route handlers. It can be used to define a set of routes that can be reused across different parts of an application. 
*/
import {displayHomePage, displayAboutPage, displayContactPage, displayProjectsPage} from '../Controllers/index.controller.server.js';

const router = Router(); // I am initializing the router function.

// route.use('/')
router.get('/', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/contact', displayContactPage);
router.get('/projects', displayProjectsPage)


/*⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
The '.get' method is used to define a route handler that will only be executed when a GET request is made to the specified path. Route handlers are functions that receive the req and res objects and return a response to the client.
*/

export default router;
