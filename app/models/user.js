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

/*
YOU MIGHT ASK YOURSELF WHY THERE IS NO PASSWORD PARAMETER IN THE SCHEMA AND HOW IT IS STILL SAVED BY MONGO:


The reason why the password is being saved by Mongo even though there is no parameter for it in the User schema is that the passport-local-mongoose LIBRARY is being used in the schema. This LIBRARY provides a pre-defined authentication strategy that includes password hashing and salting.

When a user registers and enters a password in the register.ejs form, passport-local-mongoose automatically hashes and salts the password before storing it in the database. This is done by the plugin's passportLocalMongoose method that adds a username, hash, and salt field to the schema. These fields are used for authentication purposes when a user tries to log in later.

So even though the password field is not explicitly defined in the User schema, it is still being handled by the passport-local-mongoose plugin, because simply the only thing that the library does it understands that the specific field is the password field, by looking at its "name = password" attribute inside the <input> tag.
*/