var chai = require("chai");
var spies = require("chai-spies");
var util = require("../testUtil");

chai.use(spies);
var expect = chai.expect;


describe("If macro works", function() {
  var Fixture = require("../fixtures/macro/if.jsx");

  it("should render If when using macro", function() {
    var rendered = util.render(Fixture);
    expect(rendered).to.contain("IfBlock");
  });
});


describe("Choose macro works", function() {
  var Fixture = require("../fixtures/macro/choose.jsx");

  it("should render first when block when condition true", function() {
    var rendered = util.render(Fixture, {when1: true});
    expect(rendered).to.match(util.matchTextWithinSpanWithinDiv("WhenBlock1"));
  });
});

describe("For macro works", function() {
  var Fixture = require("../fixtures/macro/for.jsx");

  it("should render TEST1..3 when using for macro", function() {
    var rendered = util.render(Fixture);
    expect(rendered).to.contain("TEST1");
    expect(rendered).to.contain("TEST2");
    expect(rendered).to.contain("TEST3");
  });
});

describe("With macro works", function() {
  var Fixture = require("../fixtures/macro/with.jsx");

  it("should render TEST when using With macro", function() {
    var rendered = util.render(Fixture);
    expect(rendered).to.contain("TEST");
  });
});

