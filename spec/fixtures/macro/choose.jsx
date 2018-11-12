var React = require("react");
var {Choose, When, Otherwise} = require("../../../src/macro")

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Choose>
          <When condition={this.props.when1}>
            <span>WhenBlock1</span>
          </When>
          <When condition={this.props.when2}>
            <span>WhenBlock2</span>
          </When>
        </Choose>
      </div>
    );
  }
});
