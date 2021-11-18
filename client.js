const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.18.4.1',
    port: 50541
  });

  //.on method event handler makes sure the function is connected to the server
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to the game server!")
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();



module.exports = {connect};