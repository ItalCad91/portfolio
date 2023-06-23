import contactModel from '../models/contact.js';

import { UserDisplayName } from '../Utils/index.js'

export function DisplayContactsList(req, res, next){
    contactModel.find(function(err, contactCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: 'contactList/list', contacts: contactCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: 'Add Contact', page: 'contactList/edit', contact: {}, displayName: UserDisplayName(req) });
}
/* 
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
THIS WILL DISPLAY THE EDIT PAGE THAT WILL BE USED TO ADD DATA 
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/

export function ProcessContactsAddPage(req, res, next){
    
    let newContact = contactModel({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        companyName: req.body.companyName,
        message: req.body.message
    });

    contactModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contactList-list')
    } )
}

/* 
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
When the client sends an HTTP POST or PUT request to the server with data, that data is sent in the request body, and req.body is used to access that data on the server side.

For example, in the above function, req.body.name, req.body.email, req.body.phoneNumber, req.body.companyName, and req.body.message are used to retrieve data sent by the client in the request body, which is then used to create a new contact object.

To use req.body, you need to include the body-parser middleware in your app.js application. This middleware is responsible for parsing the request body and making it available in the req.body object. 

⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/

export function DisplayContactsEditPage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Contact', page: 'contactList/edit', contact: contact, displayName: UserDisplayName(req) });
    });    
}

/* 
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
req.params is an object in Express.js that contains route parameters that are part of the request URL. Route parameters are dynamic parts of the URL that can be used to identify specific resources.

In the above function, req.params.id is used to retrieve the id parameter from the request URL. This parameter is typically used to identify a specific resource in the database, in this case, a contact.

For example, if the URL for the contact edit page is '/contactList/edit/123', then req.params.id will be equal to 123. This id value can then be used to retrieve the contact with that specific id from the database.

To use req.params, you need to place a colon (:) at the end of the path in the routes.js file. For example, a route definition for the contact edit page could be defined as '/contactList/edit/:id', where id is the route parameter. When a request is made to this URL, the value of id in the URL is stored in the req.params.id object.

⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/

export function ProcessContactsEditPage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        companyName: req.body.companyName,
        message: req.body.message
    });

    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contactList-list')
    } )
}

/* 
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
This function is a controller function that handles the processing of an edited contact. Here is a breakdown of what this function does:

1) The function takes in three parameters: req, res, and next. These are the request, response, and next function middleware parameters from the Express.js framework.

2) The id variable is set to the value of the id parameter in the request URL. This parameter is passed in through the URL when the user submits the edited contact form.

3) The newContact variable is set to a new instance of the contactModel object with the updated contact information. The req.body object is used to retrieve the updated contact information submitted by the user in the form.

4) The contactModel.updateOne() method is used to update the contact in the database based on the id parameter. This method takes three parameters: the filter object, which specifies the contact to update based on the id parameter; the update object, which contains the updated contact information; and a callback function that is executed when the update operation is complete.

5) If an error occurs during the update operation, it is logged to the console and sent as the response to the client.

6) If the update operation is successful, the res.redirect() method is used to redirect the user to the contact list page.

In summary, this function retrieves the id parameter from the request URL and the updated contact information from the form data, updates the contact in the database, and redirects the user to the contact list page.

⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/



export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contactList-list');
    })
}

/* 
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

In Node.js, '.remove()' is a method provided by Mongoose, an Object Data Modeling (ODM) library for MongoDB.
The '.remove()' method is used to remove documents from a MongoDB collection that match a specific query. This method takes a filter object as its argument, which specifies the query used to match the documents to remove.

⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/

export function displayGraziePage(req,res,next)
{
   res.render('index', {title : 'RR Systems Thank You', page:'Grazie', displayName: UserDisplayName(req) });
}