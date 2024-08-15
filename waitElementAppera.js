/**
 * 等待特定的元素出现
 */
const waitElementAppera = async (PositioningStrategy, webDriver, until) => {
  await webDriver.wait(until.elementLocated(PositioningStrategy), 60000);
};
module.exports = waitElementAppera;
