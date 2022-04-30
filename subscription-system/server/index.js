const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-2',
accessKeyId: process.env.AWS_ACCESS_KEY_ID,
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY });

// Create DynamoDB document client
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10' });

var params = {
 TableName: 'subscription-system',
 Key: {'id': "teste"}
};

app.get("/api", (req, res) => {

    docClient.get(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        // console.log("Success", data.Item);
        res.json({ message: data.Item });
      }

    });
    
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });