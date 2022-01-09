import * as functions from "firebase-functions";

// Microservices Express Apps
import microserviceApp1 from "./microservices/microservice1";
import microserviceApp2 from "./microservices/microservice2";

// Expose Microservices as Express Apps from Cloud Functions
export const firebaseFunction1 = functions.https.onRequest(microserviceApp1);
export const firebaseFunction2 = functions.https.onRequest(microserviceApp2);
