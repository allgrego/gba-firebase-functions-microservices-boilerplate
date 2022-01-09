/**
 * GBA Microservice 2 placeholder
 */
import * as express from "express";
import * as cors from "cors";

const app = express();

// Automatically allow cross-origin requests
app.use(cors({origin: true}));

// Global middleware
app.use((req, res, next)=>{
  // Not too much for now
  next();
});

/**
  * Routes
  */
app.use("/", (req, res)=>{
  res.send("Hi! This is microservice 1");
});

// Rest
app.get("*", (req, res) => res.status(404).json({
  error: "not-found",
  message: "Invalid route",
}));

// Expose Express API as a single Cloud Function:
export default app;
