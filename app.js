const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/data', (req, res) => {
  const inputArray = req.body.inputArray;
  const userID = req.body.userID;
  const emailID = req.body.emailID;
  const collegeRollNumber = req.body.collegeRollNumber;

  if (!inputArray || !userID || !emailID || !collegeRollNumber) {
    return res.status(400).json({
      status: 'Error',
      userID,
      emailID,
      collegeRollNumber,
      data: {
        evenNumbers: [],
        oddNumbers: [],
        alphabets: [],
      },
    });
  }

  const evenNumbers = [];
  const oddNumbers = [];
  const alphabets = [];

  inputArray.forEach((element) => {
    if (typeof element === 'number') {
      if (element % 2 === 0) {
        evenNumbers.push(element);
      } else {
        oddNumbers.push(element);
      }
    } else if (typeof element === 'string' && /[a-zA-Z]/.test(element)) {
      alphabets.push(element.toUpperCase());
    }
  });

  res.status(200).json({
    status: 'Success',
