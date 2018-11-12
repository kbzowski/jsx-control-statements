var React = require("react");
var {With} = require("../../../src/macro")

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <With attr="TEST">
          {attr}
        </With>
      </div>
    );
  }
});
