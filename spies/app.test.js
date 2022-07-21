let expect = require("expect");
let rewire = require("rewire");

let app = rewire("./app.js");

describe("app", () => {
  let db = {
    saveUser: expect.createSpy(),
  };
  app.__set__("db", db);

  it("it should call the spy correctly", () => {
    let spy = expect.createSpy();
    spy("Mohamed", 25);
    expect(spy).toHaveBeenCalledWith("Mohamed", 25);
  });
  it("it should call saveUser with user object", () => {
    let email = "mohamedmohsen@example.com";
    let password = "21345";
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
