let request = require("supertest");
let expect = require("expect");
let app = require("./server.js").app;
describe("server", () => {
  describe("#/Get", () => {
    it("it should response with hello world", (done) => {
      request(app)
        .get("/")
        .expect((res) => {
          expect(res.body).toInclude({ error: "Page Not Found" });
        })
        .expect(200)
        .end(done);
    });

    it("it should response with some data of users", (done) => {
      request(app)
        .get("/users")
        .expect((res) => {
          expect(res.body).toInclude({ name: "Marwan", age: 27 });
        })
        .expect(200)
        .end(done);
    });
  });
});
