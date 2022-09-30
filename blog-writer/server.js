const express = require('express');
const path = require('path');
const port = 3000;
const fileUpload = require('express-fileupload')

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.static(initial_path));
app.use(fileUpload())

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"))
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"))
})

// Handles the uploading
app.post('upload/', (req, res) => {
    let file = req.files.image;
    let date = new Date();  
    // image name
    let imageName = date.getDate + date.getTime + file.name;
    // image upload path
    let path = 'public/uploads/' + imageName;

    // create upload
    file.mv(path, (err, result) => {
        if (err) {
            throw err;
        } else {
            //image upload path 
            res.json('uploads/${imageName}')
        }
    })
})

app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});