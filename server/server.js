const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('YOUR_MONGODB_ATLAS_URL', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Create Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  about: String
});

const User = mongoose.model('User', userSchema);

// Save User Data
app.post('/save', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json({ message: 'User saved successfully!' });
});

// Get Latest User Data
app.get('/get-latest', async (req, res) => {
  const latestUser = await User.findOne().sort({ _id: -1 });
  res.json(latestUser);
});

app.listen(3000, () => console.log('Server running on port 3000'));
