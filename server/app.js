const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const collection = require('./mongodb');





app.get('/contactUs', (req, res) => {
  res.json('contactUs');
});
app.get('/login', (req, res) => {
  res.json('login');
 
}
);

app.get('/register-', (req, res) => {
  res.json('register');
}
);

app.post ('/login', async (req,res) => {
const data={
  name: req.body.name,
  password: req.body.password,
}

await collection.insertMany([data]);
res.send('POST request to the homepage');

});

app.post ('/contactUs', async (req,res) => {
const data={
  name: req.body.name,
  email: req.body.email,
  message: req.body.message,
  additional_details: req.body.additional_details,
}
await collection.insertMany([data]);
res.send('POST request to the homepage'); 
} );  




app.post ('/register', async(req,res) => {
const data={
  name: req.body.name,
  email: req.body.email,
  create_password: req.body.create_password,
  confirm_password: req.body.confirm_password,
}
await collection.insertMany([data]);
res.send('POST request to the homepage');
});








app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => {
  res.status(404);
  res.send('<h1>404 - Not Found</h1>');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});





 

