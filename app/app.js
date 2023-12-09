const express = require('express')
const nodeMailer = require('nodemailer');
const fs = require('fs').promises

const app = express();
const port = 3000;

async function sendEmail () {
    const transporter = nodeMailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure:  false,
        auth: {
            user: 'dun23rcu.test@outlook.com',
            pass: '23TestUEA'
        }
    });

    try {
        // Read the email from the JSON file
        const fNameData = await fs.readFile('formData.json', 'utf8');
        const { first } = JSON.parse(fNameData);
        const lNameData = await fs.readFile('formData.json', 'utf8');
        const { last } = JSON.parse(lNameData);
        const emailData = await fs.readFile('formData.json', 'utf8');
        const { email } = JSON.parse(emailData);
        const msgData = await fs.readFile('formData.json', 'utf8');
        const { message } = JSON.parse(msgData);

        const html = `
            <h1> Hello ${first} ${last} </h1>
            <p> your message was: ${message} </p>
        `;

        const info = await transporter.sendMail({
            from: 'Jules Test <dun23rcu.test@outlook.com>',
            to: email, // Use the email read from the JSON file
            subject: 'Test 123 Testing',
            html: html
        });

        console.log("Message sent: " + info.messageId);
    } catch (err) {
        console.error(err);
    }
}


app.use(express.static(__dirname));
app.use(express.static('public'));

app.post('/send-email', (req, res) => {
    // Trigger the email sending logic when a POST request is made to '/send-email'
    sendEmail().catch(err => console.error(err));
    res.sendStatus(200); // Respond with a success status to the client
});


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname }, (err) => {
        if (err) {
            console.log(err);
        }
    })
}); 


app.listen(port, () => {
    console.log (`App listneing on port ${port}!`)
})