const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Sample testimonials data
const testimonials = [
  { name: "Aisha", message: "FemNest changed the way I find safe accommodations!" },
  { name: "Priya", message: "I love the community support and the easy roommate matching." },
  { name: "Sara", message: "Very secure and comfortable platform. Highly recommend!" }
];

// API route
app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
