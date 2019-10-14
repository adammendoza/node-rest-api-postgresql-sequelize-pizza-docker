// process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../src/app");
let should = chai.should();

chai.use(chaiHttp);

// testing with a separate test database
// clear data

/*
 * Test the /GET route
 */
describe("/GET root", () => {
  it("it should GET the root of the API", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe("/GET root api", () => {
  it("it should GET root api", done => {
    chai
      .request(server)
      .get("/api")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe("/POST items", () => {
  it("it should POST item", done => {
    chai
      .request(server)
      .post("/api/items")
      .send({
        "name": "Cheese Pizza",
        "size": "Small",
        "isExtra": false,
        "price": 4.50,
        "status": "available"
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe("/PUT items/:itemId", () => {
  it("it should UPDATE item", done => {
      chai.request(server)
      .get('/api/items')
      .end(function(err, res){
        chai.request(server)
          .put('/api/items/'+res.body[0].id)
          .send({
            "name": "Cheese Pizza",
            "size": "Small",
            "price": 4.50,
            "status": "unavailable"
          })
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('name');
            response.body.should.have.property('size');
            response.body.should.have.property('price');
            response.body.should.have.property('status');
            response.body.should.have.property('id');
            response.body.name.should.equal('Cheese Pizza');
            response.body.status.should.equal('unavailable');
            done();
        });
      });
  });
});

describe("/GET items", () => {
  it("it should GET all times", done => {
    chai
      .request(server)
      .get("/api/items")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe("/GET items/:itemId", () => {
  it("it should GET one item by id ", done => {
      chai.request(server)
      .get('/api/items')
      .end(function(err, res){
        chai.request(server)
          .get('/api/items/'+res.body[0].id)
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('name');
            response.body.should.have.property('size');
            response.body.should.have.property('price');
            response.body.should.have.property('status');
            response.body.should.have.property('id');
            done();
        });
      });
  });
});

describe("/DELETE items", () => {
  it("it should DELETE the item", done => {
      chai.request(server)
      .get('/api/items')
      .end(function(err, res){
        chai.request(server)
          .delete('/api/items/'+res.body[0].id)
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            done();
        });
      });
  });
});
