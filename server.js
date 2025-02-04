const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Cloud-Native Application</title>
        <style>
          body {
            background: linear-gradient(to right, #0d6efd, #87CEEB); /* Blue to Sky Blue */
            color: #FFFFFF;
            text-align: center;
            font-family: Arial, sans-serif;
            padding: 50px;
          }
          h1 {
            font-size: 50px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          }
          .button {
            background-color: #FFA500;
            color: #001F3F;
            padding: 15px 30px;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            display: inline-block;
            margin-top: 20px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          }
          .footer {
            margin-top: 50px;
            font-size: 14px;
            color: #B0BEC5;
          }
        </style>
      </head>
      <body>
        <h1>Application Deployment Successful 🚀</h1>
        <a href="#" class="button">Get Started</a>
        <div class="footer">Powering Modern Applications with 💙 Kubernetes</div>
      </body>
    </html>
  `);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
