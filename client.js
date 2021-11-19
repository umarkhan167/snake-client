const net = require("net");
const { IP, PORT, NAME } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //.on method event handler makes sure the function is connected to the server
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to the game server!");
    conn.write(NAME);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};



module.exports = {connect};