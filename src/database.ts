import {connect} from "mongoose";
const DB_Name: string = process.env.DB_NAME;
const DB_Password: string = process.env.DB_PASS; 
const DB_URL: string = `mongodb+srv://dep0oo74:${DB_Password}@dep0oo74.mk0uu.mongodb.net/${DB_Name}`;

connect(DB_URL).then(() => {
    console.log("connected to database!");
}).catch(err => {
    console.log(`An error occurred while connecting to database ${err}`);
})