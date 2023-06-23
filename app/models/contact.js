import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String, 
    email: String, 
    phoneNumber: Number,
    companyName: String,
    message: String
}, {
    timestamps: true,
    collection: 'contacts'
});

/* 
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
This code defines a new Mongoose schema for a "contact" document in a MongoDB collection. The schema specifies the fields that will be present in the document and their data types. In this case, the "contacts" schema has fields for name, email, phoneNumber, companyName, and message, all of which are defined as strings or numbers.

The second argument to the new Schema() constructor sets additional options for the schema. In this case, timestamps: true adds two fields to each document that store the date and time when it was created and last updated, and collection: 'contacts' specifies the name of the collection in the database where documents should be stored.
⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/



export default mongoose.model('Contacts', ContactSchema);