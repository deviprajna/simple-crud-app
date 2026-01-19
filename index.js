// import library express 
const express = require ('express');

// membuat aplikasi / server 
const app = express();

// membuka server ke port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// menerima permintaan get dari client
app.get('/', (req, res) => {
    // res.send dan res.rediqrect gabisa digunakan barengan karena
    // hanya butuh satu respons dari server.
    // res.send("Heloo guys");
    res.redirect("https://media.istockphoto.com/id/1443562748/id/foto/kucing-jahe-lucu.jpg?s=612x612&w=0&k=20&c=g--RaRzUgk83osyJGx88ZtoChTk3VzP8n86EQHvc7Ko=");
});