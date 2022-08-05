const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51L0gKBSAIn39VlQdvimDefNSmU73OBwMxxbg9Med3eubi19g8R53cP0LVFb4uh2n4l7bAw5JeBfCf8sgI0Eez4px00nOZQBkhq');

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

//   next();
// })

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post("/payments/create/", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen 
exports.api = functions.https.onRequest(app);


// This is an api endpoint 
// when we visit this we see hello world as that is the home api route response that we have sent above
// http://localhost:5002/clone-aa05e/us-central1/api