/**
 * 查找网页上的元素
 */

const findElement = async (PositioningStrategy, webDriver) => {
  const ele = await webDriver.findElement(PositioningStrategy);
  return ele;
};

module.exports = findElement;
