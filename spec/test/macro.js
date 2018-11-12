var chai = require("chai");
var spies = require("chai-spies");
var util = require("../testUtil");

chai.use(spies);
var expect = chai.expect;


describe("If macro works", function() {
  var Fixture = require("../fixtures/if/macro.jsx");

  it("should render If when using macro", function() {
    var rendered = util.render(Fixture);
    expect(rendered).to.contain("IfBlock");
  });
});
