// setup interface to handle user input from stdin

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

setupInput;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};  


module.exports = { setupInput };