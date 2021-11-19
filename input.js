// setup interface to handle user input from stdin

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
    connection.write("Move: up");
  } else if (key === 'a') {
    console.log("Move: left");
    connection.write("Move: left");
   } else if (key === 's') {
    console.log("Move: down");
    connection.write("Move: down");
    } else if (key === 'd') {
    console.log("Move: right");
    connection.write("Move: right");
    } else if (key === "m") {
      connection.write("Say: Im gonna win!")
    }
};  


module.exports = { setupInput };


