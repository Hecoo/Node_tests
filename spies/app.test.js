let expect = require("expect");
// let app = require(./app.js);
let rewire = require("rewire");
let app = rewire("./app.js");

describe("app", () => {
  let db = {
    saveUser: expect.createSpy(),
  };
  app.__set__("db", db);

  it("it should call the spy correctly", () => {
    let spy = expect.createSpy(); // created a spy and put it in a
    spy("Mohamed", 25); // for calling the spy
    expect(spy).toHaveBeenCalledWith("Mohamed", 25);
  });
  it("it should call saveUser with user object", () => {
    let email = "mohamedmohsen@example.com";
    let password = "21345";
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
