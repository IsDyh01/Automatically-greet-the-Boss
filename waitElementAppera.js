/**
 * 等待特定的元素出现
 */
const waitElementAppera = async (PositioningStrategy, webDriver, until, eleName) => {
  try {
    await webDriver.wait(until.elementLocated(PositioningStrategy), 60000);
  } catch (error) {
    console.log(error);
    
    return Promise.reject(`等待${eleName}元素已超时`)
  }
};
module.exports = waitElementAppera;
