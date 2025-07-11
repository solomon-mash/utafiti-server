const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use('/images', express.static('public/images'));

const projects = require('./projects.json')
const testimonials = require('./testimonials.json')

// Get a specific project by ID
app.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

// Get all projects
app.get('/projects', (req, res) => {
  res.json(projects);
});

//Get all testimonials
app.get('/testimonials', (req, res)=>{
    res.json(testimonials);
})

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
