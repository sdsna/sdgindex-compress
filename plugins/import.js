// Defines an @import tag for JSDoc
// Example:
// @import { compress } from "@sdgindex/compress"
exports.defineTags = function (dictionary) {
  dictionary.defineTag("import", {
    mustHaveValue: false,
    canHaveType: false,
    canHaveName: false,
    onTagged: function (doclet, tag) {
      doclet.import = tag.value;
    },
  });
};
