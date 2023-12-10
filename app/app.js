const express = require("express");
const nodeMailer = require("nodemailer");
const fs = require("fs").promises;
const bodyParser = require("body-parser");

const app = express();
const port = 3000;


app.use(express.static(__dirname));
app.use(express.static("public"));
app.use(bodyParser.json());

app.post("/add-data", async (req, res) => {
  try {
      const formData = req.body;

      // Read existing data from formData.json
      const jsonData = await fs.readFile("formData.json", "utf8");
      const existingData = JSON.parse(jsonData);

      // Update the existing JSON data with new form data
      for (let key in formData) {
          if (key in existingData) {
              existingData[key].push(formData[key]);
          }
      }

      // Write updated data back to formData.json
      await fs.writeFile("formData.json", JSON.stringify(existingData, null, 2));

      console.log("data saved " + info.messageId);
  } catch (err) {
      console.error(err);
  }
});

async function sendEmail() {
  const transporter = nodeMailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: "dun23rcu.test@outlook.com",
      pass: "23TestUEA",
    },
  });

  try {
    // Read the email from the JSON file
    const fNameData = await fs.readFile("formData.json", "utf8");
    const { first } = JSON.parse(fNameData);
    const lNameData = await fs.readFile("formData.json", "utf8");
    const { last } = JSON.parse(lNameData);
    const emailData = await fs.readFile("formData.json", "utf8");
    const { email } = JSON.parse(emailData);
    const msgData = await fs.readFile("formData.json", "utf8");
    const { message } = JSON.parse(msgData);

    const html = `
            <h1> Hello ${first} ${last} </h1>
            <p> your message was: ${message} </p>
        `;

    const info = await transporter.sendMail({
      from: "Jules Test <dun23rcu.test@outlook.com>",
      to: email, // Use the email read from the JSON file
      subject: "Test 123 Testing",
      html: html,
    });

    console.log("Message sent: " + info.messageId);
  } catch (err) {
    console.error(err);
  }
}

app.post("/send-email", (req, res) => {
  // Trigger the email sending logic when a POST request is made to '/send-email'
  sendEmail().catch((err) => console.error(err));
  res.sendStatus(200); // Respond with a success status to the client
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname }, (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
