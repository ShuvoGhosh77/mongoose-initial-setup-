import express from "express"
import mongoose from "mongoose";
import app from "./app";

const port = 5000


async function bootstrap() {
    try {
        await mongoose.connect("mongodb://localhost:27017/practice-mongoose");
        console.log(`🛢 Database connection successful`);
    
        app.listen(port, () => {
          console.log(`Server is  listening on port ${port}`);
        });
      } catch (err) {
        console.log(`Failed to connect database`, err);
      }
  }
bootstrap();


