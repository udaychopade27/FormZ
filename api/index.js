const express = require("express");
const cors = require("cors");
const app = express();
const User = require('./models/User')
const { mongoose } = require('mongoose');

// Enhanced CORS configuration
app.use(cors({
  origin: true, // Reflects the request origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json());

// Additional headers middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Test route
app.get("/test", (req, res) => {
  res.json("Test Works");
});

// Register Route
app.post('/register', async (req, res) => {
  try {
    const userInfo = await User.create(req.body);
    console.log('User registered:', userInfo);
    res.json(userInfo);
  } catch (error) {
    console.error('Registration error:', error);
    res.status(422).json({ message: error.message });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
