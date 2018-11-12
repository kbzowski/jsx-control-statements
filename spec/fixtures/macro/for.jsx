var React = require("react");
var {For} = require("../../../src/macro")

module.exports = React.createClass({
  render: function() {
    this.test = "test";

    return (
      <div>
        <For each="item" of={["TEST1", "TEST2", "TEST3"]}>
          <span key={item}>{item}</span>
        </For>
      </div>
    );
  }
});
