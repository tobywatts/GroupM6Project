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

      sendEmail(formData, () => {
        console.log("Email sent after data saved");
        res.sendStatus(200); // Respond with a success status to the client after the email is sent
      });

      console.log("Data saved");
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error"); // Handle errors appropriately
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
    const formData = JSON.parse(await fs.readFile("formData.json", "utf8"));

    const first = formData.first[formData.first.length - 1];
    const last = formData.last[formData.last.length - 1];
    const email = formData.email[formData.email.length - 1];
    const message = formData.message[formData.message.length - 1];


    const html = `
      <head>
        <meta charset="UTF-8">
        <title>Thank You ${first} ${last} for Subscribing to our UN Website</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; padding: 20px;">

        <table style="max-width: 600px; margin: 0 auto; background-color: #fff; border-collapse: collapse; border-radius: 5px; overflow: hidden;">
          <tr>
            <td style="padding: 20px;">
              <h1 style="text-align: center; color: #007bff;">Thank You for Subscribing!</h1>
              <p style="text-align: center;">We appreciate you joining our community and staying informed about critical global issues.</p>
              <h2 style="color: #007bff;">Important UN Goals:</h2>
              <ol>
                <li style="margin-bottom: 10px;"><strong> Affordable and Clean Energy:</strong> Energy access is pivotal for global challenges like jobs, security, and climate change,.</li>
                <li style="margin-bottom: 10px;"><strong>Responsible Consumption and Production:</strong> Sustainable consumption means efficient resource use for development and poverty reduction.</li>
                <li style="margin-bottom: 10px;"><strong>Climate Action:</strong> Urgently addressing climate change creates global job opportunities through infrastructure upgrades..</li>
              </ol>
              <p style="text-align: center;">Stay tuned for updates on these critical goals and how you can make a difference!</p>
              <p style="text-align: center;">Thank you again for subscribing to our UN website!</p>
              <p></p>
              <p></p>
              <p> <i> <small> your message to us was: ${message} </small> </i> </p>
            </td>
          </tr>
        </table>

      </body>
      `;

    const info = await transporter.sendMail({
      from: "Jules Test <dun23rcu.test@outlook.com>",
      to: email, 
      subject: "Thakn you for caring about our planet <3",
      html: html,
    });

    console.log("Message sent: " + info.messageId);
    if (callback) {
      callback()
    }
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
