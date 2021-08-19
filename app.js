const HTTP = require("http");
const app = require("./src/middleware");
const PORT = process.env.PORT;

HTTP.createServer(app).listen(PORT, () => {
  console.log("Server is runing!");
});
