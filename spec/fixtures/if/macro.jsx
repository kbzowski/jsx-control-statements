var React = require("react");
var If = require("../../../src/macro/ifStatement.macro")

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <If condition={true}>
          <span>IfBlock</span>
        </If>
      </div>
    );
  }
});
