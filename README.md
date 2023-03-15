<h1> In-app Currency </h1>

An backend system that showcases a wallet service that uses in-app currency to buy points and purchase features. I made this using Node JS, Express JS and MongoDB.

Use the provided example env. The program will run locally on port 3000.

The following four endpoints are available:

<h2> POST /users/signup </h2>

Sample request body:
```javascript
{
    "firstName": "Salman",
    "lastName": "Farooq",
    "phoneNumber": "03321028991",
    "password": "password123424"
}
```
Sample response:
```javascript
{
    "firstName": "Salman",
    "lastName": "Farooq",
    "phoneNumber": "03321038991",
    "password": "$2a$10$qd2ctx5qgROo3GNj8Cxl1e2srdyuxLdxjH9DX2TqBeTnzZmMwqIge",
    "features": [],
    "_id": "63600f294be0946248948315",
    "__v": 0
}
```

This creates a user with the details specified and returns a mongoDB document of the user. The phoneNumber and password shall
be used for logging in the next endpoint

<h2> POST /users/login </h2>

Sample request body:
```javascript
{
    "phoneNumber": "03321028991",
    "password": "password123424"
}
```
Sample response:
```javascript
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzVlOWFmMDUwZGQ3NzEyOWJkYjFmMDMiLCJwaG9uZU51bWJlciI6IjAzMzIxMDI4OTkxIiwiaWF0IjoxNjY3MjM5Mzg3LCJleHAiOjE2NjcyNDY1ODd9.GmZ3v3Bq87wMREBiRhFrgR_8fbFsoj08nxeTepYJ_2I"
}
```
This allows the user to login and perform operations that only they are authorised to do.
The user receives an access token in the response which can be used to perform the following
requests.

<h2> PUT /users/buyPoints </h2>

Header: Authorization

Sample request body: 

```javascript
{
  "maqsadPoints": 100,
  "paymentMethod": {
      "cardholderName": "Salman Farooq",
      "cardNumber": 9372198367,
      "cvnCode": "928",
      "expiryDate": "10/10/2029"
  }  
}
```
Sample response:
```javascript
{
    "message": "100 points have been added to your wallet"
}
```
This endpoint allows the user to top-up their wallet with Maqsad points(in-app currency)
which allows them to buy premium features. It requires the Authorization token provided when logging in
as a header to perform the request.

<h2> PUT /users/buyFeature </h2>

Sample request body:

```javascript
{
  "featureName": "AllPastPapers"
}
```

Sample response:

```javascript
{
    "message": "AllPastPapers has been unlocked"
}
```
This endpoint allows the user to purchase premium features available
in the application. The featureName must one of the values mentioned features.js in the imports folder.
The Authorization token returned when logging in is required
as a header when performing the request.

<h2>Docker</h2>

A docker image of the application is available on the following link:
https://hub.docker.com/r/salmaaano/in-app-currency

You can pull the image with this command:
docker pull salmaaano/in-app-currency

You can run it after pulling the image with the following command:
docker run -p 49160:3000 -d salmaaano/in-app-currency
This will run the container on port 49160
