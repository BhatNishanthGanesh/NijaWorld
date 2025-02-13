const dotenv = require("dotenv");
const express = require("express");
const nodemailer = require("nodemailer");

dotenv.config();
const app = express();
app.use(express.json());

const users = [{ email: "nishanthbhat18@gmail.com", password: "123456" }];
const otpStorage = {}; 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();


app.post("/request-otp", async (req, res) => {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const otp = generateOTP();
  otpStorage[email] = otp; 

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP for login is: ${otp}. It is valid for 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    console.error("Error sending OTP email:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

app.post("/verify-otp", (req, res) => {
  const { otp } = req.body;

  const email = Object.keys(otpStorage).find((key) => otpStorage[key] === otp);

  if (!email) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }
  delete otpStorage[email]; 
  res.status(200).json({ message: "OTP verified, login successful!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
