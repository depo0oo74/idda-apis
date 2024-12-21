import express from "express";
const app = express();

// ** Import and enable CORS
import cors from "cors";
app.use(cors());

// ** Import and config dot env
import dotenv from "dotenv";
dotenv.config();

// ** Import Database
import "./database";

// ** Set uploads folder as a static folder
// app.use(express.static('src/uploads'));

// ** Import Routes
import faqsRoutes from "./routes/faqs"

// ** Using Routes
app.use(faqsRoutes)
app.use('*', (_, res) => {
  res.status(404).send({
    status: 'Error',
    message: '404 - Not found Api.'
  })
})


// ** PORT to run
const PORT = process.env.PORT || 5000;

// ** Listening the Server on specific PORT
app.listen(PORT, () => {
  console.log(`Server is running now on port ${PORT}`); 
});
