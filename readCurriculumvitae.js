const fs = require("fs");
const readCurriculumviatae = (path) => {
  try {
    return fs.readFileSync(path, "utf-8");
  } catch (error) {
    console.log(error);
    
    return Promise.reject('读取个人简历失败~')
  }
};

module.exports = readCurriculumviatae;
