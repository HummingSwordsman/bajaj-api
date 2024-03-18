const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const userId = john_doe_17091999;
  const email = john@xyz.com;
  const rollNumber = ABCD123;

  const oddNumbers = [];
  const evenNumbers = [];
  const alphabets = [];

  data.forEach(item => {
    if (typeof item === 'number') {
      if (item % 2 === 0) {
        evenNumbers.push(item);
      } else {
        oddNumbers.push(item);
      }
    } else if (typeof item === 'string') {
      if (/^[A-Za-z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      }
    }
  });

  const response = {
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets
  };

  res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(Server is running on port ${port});
});
