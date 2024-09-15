const app = require("express")();
const { createServer } = require("http");
const { join } = require("path")
const server = createServer(app);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});
server.listen(3333, () => console.log('Server running at http://localhost:3333'));