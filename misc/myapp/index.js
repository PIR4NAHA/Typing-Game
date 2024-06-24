const fs = require('fs');
const http = require('http');
// const script = require('./script');

const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
    fs.promises.readFile(__dirname + '/index.html')
        .then(contents => {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

var data = fs.readFileSync('quotes.json');
var quotes = JSON.parse(data);

let quote = {
    "_id": "9faWWZ4ITZrr", 
    "content": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", 
    "author": "Ralph Waldo Emerson", 
    "tags": ["Famous Quotes"], 
    "authorSlug": "ralph-waldo-emerson", 
    "length": 93, 
    "dateAdded": "2020-10-14", 
    "dateModified": "2023-04-14" 
};

quotes.push(quote);

fs.writeFile(
    "quotes.json",
    JSON.stringify(quotes), err => {
        if (err) throw err;
        console.log("Done Writing.");
    });
