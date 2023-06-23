/*
  Author: Riccardo Reali
  Date: 2023-02-21
*/


import express from 'express';

// need passport 
import passport from 'passport';

// need to include the User Model for authentication
import User from '../models/user.js';

// import DisplayName Utility method
import { UserDisplayName } from '../Utils/index.js'

// Display Functions
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/contactList-list');
}

export function DisplayRegisterPage(req, res, next){
    if(!req.user){
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

/*

This is a JavaScript module that exports several functions related to user authentication using Passport and an Express server. Here is an overview of what each function does:

DisplayLoginPage: Renders the login page if the user is not already logged in, otherwise redirects them to the contact list page. Uses the UserDisplayName function from a utility module to pass the user's display name to the view.

DisplayRegisterPage: Renders the registration page if the user is not already logged in, otherwise redirects them to the contact list page. Uses the UserDisplayName function to pass the user's display name to the view.

ProcessLoginPage: Processes a POST request containing login credentials. Uses the Passport authenticate method with the local strategy to verify the credentials. If authentication fails, sets a flash message and redirects to the login page. If authentication succeeds, logs the user in using the logIn method on the request object and redirects to the home page.

ProcessRegisterPage: Processes a POST request containing registration information. Creates a new user object using the User model and the data from the request body. Registers the user using the register method provided by Passport-local-mongoose. If registration fails due to an existing user, sets a flash message and redirects to the registration page. If registration succeeds, logs the user in using the authenticate method and redirects to the home page.

ProcessLogoutPage: Logs the user out using the logOut method on the request object and redirects to the login page.

*/