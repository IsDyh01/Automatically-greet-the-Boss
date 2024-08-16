/**
 * 查找网页上的元素
 */

const findElement = async (PositioningStrategy, webDriver, eleName) => {
  try {
    const ele = await webDriver.findElement(PositioningStrategy);
  return ele;
  } catch (error) {
    console.log(error);
    return Promise.reject(`未找到 ${eleName} 元素`)
  }
};

module.exports = findElement;
