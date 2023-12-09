const express = require('express')
const nodeMailer = require('nodemailer');

const app = express();
const port = 3000;

const html = `
    <h1> Hello World </h1>
    <p> I am testing NodeMailer! </p>
`;

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

    const info = await transporter.sendMail({
        from: 'Jules Test <dun23rcu.test@outlook.com>',
        to: 'waterylemon420@gmail.com',
        subject: 'Test 123 Testing',
        html: html
    })

    console.log("Message sent: " + info.messageId);
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