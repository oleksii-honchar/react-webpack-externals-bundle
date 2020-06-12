const path = require("path");

function resolveBasePath(dir) {
  return path.join(__dirname, '../..', dir)
}

module.exports = {
  alias: {
    "src": resolveBasePath("src"),
    "@contexts": resolveBasePath("src/contexts"),
    "components": resolveBasePath("src/components"),
    "models": resolveBasePath("src/models"),
    "pages": resolveBasePath("src/pages")
  }
}