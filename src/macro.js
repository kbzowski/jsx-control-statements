const {createMacro} = require("babel-plugin-macros");
var transformFor = require("./forStatement");
var transformIf = require("./ifStatement");
var transformChoose = require("./chooseStatement");
var transformWith = require("./withStatement");


module.exports = createMacro(transformIfMacro);


function transformIfMacro({references, state, babel}) {
  const types = babel.types;

  var nodeHandlers = {
    For: transformFor(babel),
    If: transformIf(babel),
    Choose: transformChoose(babel),
    With: transformWith(babel)
  };

  var elements = Object.keys(references);

  elements.forEach(element => {
    references[element].forEach(referencePath => {
      if (referencePath.parentPath.type === "JSXOpeningElement") {

        var node = referencePath.parentPath;
        var file = referencePath.hub.file;

        var nodeName = referencePath.node.name;

        var handler = nodeHandlers[nodeName];
        if (!handler) return;

        var target = types.jSXExpressionContainer(handler(node.parent, file));
        referencePath.parentPath.parentPath.replaceWith(target);
      }
    });
  });
}



