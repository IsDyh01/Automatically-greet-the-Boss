const fs = require("fs");
const readCurriculumviatae = (path) => {
  return fs.readFileSync(path, "utf-8");
};

module.exports = readCurriculumviatae;
