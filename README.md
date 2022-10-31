In-app Currency Assignment

An backend system that showcases a wallet service that uses in-app currency to buy points and purchase features. I made this using Node JS, Express JS and MongoDB.

Use the provided example env. The program will run locally on port 3000.

The following four endpoints are available:

POST /users/signup

sample request body:
{
    "firstName": "Salman",
    "lastName": "Farooq",
    "phoneNumber": "03321028991",
    "password": "password123424"
}

sample response:
{
    "firstName": "Salman",
    "lastName": "Farooq",
    "phoneNumber": "03321038991",
    "password": "$2a$10$qd2ctx5qgROo3GNj8Cxl1e2srdyuxLdxjH9DX2TqBeTnzZmMwqIge",
    "features": [],
    "_id": "63600f294be0946248948315",
    "__v": 0
}

This creates a user with the details specified and returns a mongoDB document of the user. The phoneNumber and password shall
be used for logging in the next endpoint

POST /users/signup

sample request body:

{
    "phoneNumber": "03321028991",
    "password": "password123424"
}

sample response:
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzVlOWFmMDUwZGQ3NzEyOWJkYjFmMDMiLCJwaG9uZU51bWJlciI6IjAzMzIxMDI4OTkxIiwiaWF0IjoxNjY3MjM5Mzg3LCJleHAiOjE2NjcyNDY1ODd9.GmZ3v3Bq87wMREBiRhFrgR_8fbFsoj08nxeTepYJ_2I"
}

This allows the user to login and perform operation that only they are authorised to do.
The user receives an access token in the response which can be used to perform the following
requests.

PUT /users/buyPoints
Header: Authorization
sample request body: 
{
  "maqsadPoints": 100,
  "paymentMethod": {
      "cardholderName": "Salman Farooq",
      "cardNumber": 9372198367,
      "cvnCode": "928",
      "expiryDate": "10/10/2029"
  }  
}

sample response:
{
    "message": "100 points have been added to your wallet"
}

This endpoint allows the user to top-up their wallet with Maqsad points(in-app currency)
which allows them to buy premium features. It requires the Authorization token provided when logging in
as a header in the request to perform the request.

PUT /users/buyFeature

sample request body:
{
  "featureName": "AllPastPapers"
}

sample response:
{
    "message": "AllPastPapers has been unlocked"
}

This endpoint allows the user to purchase premium features available
in the application. The featureName must one of the values mentioned features.js in the import folder.
The Authorization token returned when logging in is required
as a header when performing the request.


A docker image of the application is available on the following link:
Docker Image available on https://hub.docker.com/r/salmaaano/in-app-currency

You can pull the image with this command:
docker pull salmaaano/in-app-currency

You can run it after pulling the image with the following command:
docker run -p 49160:3000 -d salmaaano/in-app-currency
