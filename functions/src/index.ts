// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";

// The Firebase Admin SDK to access Firestore.
import { initializeApp } from "firebase-admin/app";

initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send({ data: "Hello from Firebase!", error: false });
});
