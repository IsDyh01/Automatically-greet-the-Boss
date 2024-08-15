const waitElementAppera = require("./waitElementAppera");
const findElement = require("./findElement");
async function getJobDescriptionByIndex(index, webDriver, By) {
  try {
    const PositioningStrategyJobLi = By.xpath(
      `//*[@id='wrap']/div[2]/div[2]/div/div/div[1]/ul/li[${index}]`
    );
    const jobLiElement = await webDriver.findElement(PositioningStrategyJobLi);
    // 点击招聘信息列表中的项
    await jobLiElement.click();

    // 找到描述信息节点并获取文字
    const PositioningStrategyJobLiDescription = By.xpath(
      "//*[@id='wrap']/div[2]/div[2]/div/div/div[2]/div/div[2]/p"
    );
    await waitElementAppera(
      PositioningStrategyJobLiDescription,
      webDriver,
      until
    );
    const jobLiDescriptionElement = await findElement(
      PositioningStrategyJobLiDescription,
      webDriver
    );

    return jobLiDescriptionElement.getText();
  } catch (error) {
    console.log(`在索引 ${index} 处找不到工作。`);
    return null;
  }
}
module.exports = getJobDescriptionByIndex;
