const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //Web3 needs to be capital as we are using it as constructor function
const web3 = new Web3(ganache.provider()); //function to work with, changes with the providor with time
const { interface, bytecode } = require("../compile"); //interface is ABI and bytecode is raw compiled contract

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface)) //web3 library uese ethereum Contract consstructor func to acces the contracts.
    //JSON.parse() changes json data to javascript object
    .deploy({
      //tells web3 we want to deploy the code
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" }); //instructs web3  to send
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
    console.log(inbox.options.address);
  });
  it("it has a default message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, "Hi there!");
    console.log(message);
  });
  it("change the message", async () => {
    await inbox.methods
      .setMessage("bye")
      .send({ from: accounts[0], gas: "1000000" });
    const message = await inbox.methods.message().call();
    console.log(message);
  });
});
