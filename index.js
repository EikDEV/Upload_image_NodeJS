const express = require('express');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const path = require('path'); 
const app = express();
const uploadsFolder = path.resolve(__dirname, './uploads');

const upload = multer({
    storage: multer.diskStorage({
        destination: uploadsFolder,
        filename: (req, file, callback) => callback(null, uuidv4() + path.extname(file.originalname))
    })
});

app.use('/file', express.static(uploadsFolder))

app.post('/file', upload.single('imagem'), (req, res) => {
    res.send("Tudo certo!");
});

app.listen(3000);