/*
  Author: Riccardo Reali
  Date: 2022-10-21
*/


import jwt from 'jsonwebtoken';
import { Secret } from '../../config/config.js';

export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

/*
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
THIS FUNCTION IS EXPLAINED INSIDE README FILE AT WEEK 5.
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/

export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}

/*
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
THIS FUNCTION IS EXPLAINED INSIDE README FILE AT WEEK 5.
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/




export function GenerateToken(user){
    const payload = {
        id: user._id, 
        displayName: user.displayName,
        username: user.username,
        emailAddress: user.emailAddress
    }

    const jwtOption = {
        expiresIn: 604800 // 1 week
    }

    return jwt.sign(payload, Secret, jwtOption);
}