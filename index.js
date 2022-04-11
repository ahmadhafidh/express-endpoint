const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

var urlencodedParser = bodyParser.urlencoded({ extended: false })

function handleGetRoot(req, res){
    console.log("ini dari console.log");
    res.send("everything, hello world");
}

function handlePostData(req, res){
    const id = req.params.id;
    console.log(id);
    res.send(id);
}

app.get("/api/v1/books", handleGetRoot);
app.post("/api/v1/login", handleGetRoot);
app.post("/api/v1/books", handleGetRoot);

app.get('/api/v1/books/:id', handlePostData)
app.put("/api/v1/books/:id", handlePostData);
app.delete("/api/v1/books/:id", handlePostData);

app.post('/login', urlencodedParser, function (req, res) {
    res.send('username :' + req.body.username + 'email :' + req.body.email)
})

app.post('/', function (req, res) {
    console.log(req.body.name)
    res.end();
})

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});