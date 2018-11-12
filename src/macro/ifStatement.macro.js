const {createMacro, MacroError} = require("babel-plugin-macros");
var transformIf = require("../ifStatement");

module.exports = createMacro(transformIfMacro);

function transformIfMacro({references, state, babel}) {
  const types = babel.types;

  if (references.default === undefined) {
    throw new MacroError("Use default <If> import instead of implicit.");
  }

  references.default.forEach((referencePath) => {
    if (referencePath.parentPath.type === "JSXOpeningElement") {

      let node = referencePath.parentPath;
      let file = referencePath.hub.file;

      let handler = transformIf(babel);
      let replacement = handler(node.parent, file);
      let childrenExp = types.jSXExpressionContainer(replacement);
      let opening = types.jSXOpeningElement(types.jsxIdentifier("div"), []);
      let target = types.jSXElement(opening, null, [childrenExp], false);
      referencePath.parentPath.parentPath.replaceWith(target);
    }
  })

}


