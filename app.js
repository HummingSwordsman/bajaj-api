const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Example user information (can be replaced with actual user data)
const userInfo = {
    full_name: 'john_doe',
    dob: '17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123'
};

app.post('/bfhl', (req, res) => {
    try {
        // Extracting data from the request body
        const { data } = req.body;

        // User ID generation
        const userId = generateUserId(userInfo.full_name, userInfo.dob);

        // Processing the array
        const evenNumbers = [];
        const oddNumbers = [];
        const alphabetsUpperCase = [];
        data.forEach(item => {
            if (typeof item === 'number') {
                if (item % 2 === 0) {
                    evenNumbers.push(item.toString());
                } else {
                    oddNumbers.push(item.toString());
                }
            } else if (typeof item === 'string' && item.match(/[a-zA-Z]/)) {
                alphabetsUpperCase.push(item.toUpperCase());
            }
        });

        // Constructing the response
        const response = {
            is_success: true,
            user_id: userId,
            email: userInfo.email,
            roll_number: userInfo.roll_number,
            even_numbers: evenNumbers,
            odd_numbers: oddNumbers,
            alphabets: alphabetsUpperCase
        };

        // Sending the response
        res.json(response);
    } catch (error) {
        // Handling exceptions
        res.status(500).json({ error: error.message });
    }
});

// Function to generate user ID
function generateUserId(fullName, dob) {
    const formattedDob = dob.replace(/-/g, '');
    return `${fullName}_${formattedDob}`;
}

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
