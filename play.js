const { stdin } = require("process");
const clientConnect = require("./client");

clientConnect;

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();

setupInput(connection);