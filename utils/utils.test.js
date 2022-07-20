let utils = require("./utils");
let expect = require("expect");
describe("utils", () => {
  describe("adding", () => {
    it("Should add two numbers", () => {
      let res = utils.add(10, 20);
      expect(res).toBe(30).toBeA("number");
      //   if (res !== 30) {
      //     throw new Error(`expected 30 ,but got ${res}`);
      //   }
    });
  });
  it("it should Async two numbers", (done) => {
    utils.asyncAdd(3, 4, (sum) => {
      expect(sum).toBe(7).toBeA("number");
      done();
    });
  });

  it("it should Async Square two numbers ", (done) => {
    utils.asyncSquare(10, (sum) => {
      expect(sum).toBe(100).toBeA("number");
      done();
    });
  });

  it("Should square the number", () => {
    let res = utils.square(10);
    expect(res).toBe(100).toBeA("number");
    //   if (res !== 100) {
    //     throw new Error(`expected 100 ,but got ${res}`);
    //   }
  });

  it("it should set firstName secondName", () => {
    let res = utils.setName({ location: "Egypt", age: 28 }, "Mohamed Mohsen");
    expect(res).toInclude({ firstName: "Mohamed", secondName: "Mohsen" });
  });

  // it("it should expect some values", () => {
  //   //   expect(12).toNotBe(12);
  //   //   expect({ name: "Mohamed" }).toBe({ name: "Mohamed" });
  //   //   expect({ name: "Mohamed" }).toEqual({ name: "Mohamed" });
  //   //   expect([1, 4, 5]).toInclude(1);
  //   expect({ name: "Mohamed", age: 25, location: "Egypt" }).toInclude({
  //     name: "Mohamed",
  //   });
  // });
});
