// setup interface to handle user input from stdin
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //added an event listener
  stdin.on("data", handleUserInput);

  return stdin;

};


const handleUserInput = function (key) {
  // console.log(key);
  if (key === '\u0003') {
    process.exit();
  } if (key === 'w') {
    console.log("Move: up");
    connection.write(MOVE_UP_KEY);
  } else if (key === 'a') {
    console.log("Move: left");
    connection.write(MOVE_LEFT_KEY);
   } else if (key === 's') {
    console.log("Move: down");
    connection.write(MOVE_DOWN_KEY);
    } else if (key === 'd') {
    console.log("Move: right");
    connection.write(MOVE_RIGHT_KEY);
    } else if (key === "m") {
      connection.write("Say: Im gonna win!")
    }
};  


module.exports = { setupInput };


