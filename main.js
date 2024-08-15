// By 对象用于指定你用来定位页面元素的策略。它提供了一组方法，每种方法都对应不同的定位方式。
// 通过这些方法，你可以精确地找到页面上的元素，以便进行进一步的操作，比如点击、输入文本或提取信息。

//Key 对象提供了键盘按键的常量，可以用来模拟键盘输入操作。它包括常用的按键常量，如 Key.ENTER、Key.TAB、Key.ESCAPE 等。

// until 对象提供了一组等待条件，用于在操作元素之前等待某些条件满足。常用的条件包括元素可见、元素存在、页面标题变化等。
// 它有助于处理动态内容或延迟加载的元素
const { Builder, By, Key, until } = require("selenium-webdriver");
const findElement = require("./findElement");
const waitElementAppera = require("./waitElementAppera");
const openChorme = require("./openChorme");
const fs = require('fs');

// 根据索引获取职位描述
async function getJobDescriptionByIndex(index, webDriver) {
  try {
    const PositioningStrategyJobLi = By.xpath(`//*[@id='wrap']/div[2]/div[2]/div/div/div[1]/ul/li[${index}]`)
    const jobLiElement = await webDriver.findElement(PositioningStrategyJobLi);
    // 点击招聘信息列表中的项
    await jobLiElement.click();

    // 找到描述信息节点并获取文字
    const PositioningStrategyJobLiDescription = By.xpath("//*[@id='wrap']/div[2]/div[2]/div/div/div[2]/div/div[2]/p");
    await waitElementAppera(PositioningStrategyJobLiDescription, webDriver, until);
    const jobLiDescriptionElement = await findElement(PositioningStrategyJobLiDescription, webDriver);
    return jobLiDescriptionElement.getText();
  } catch (error) {
    console.log(`在索引 ${index} 处找不到工作。`);
    return null;
  }
}

const readFile = (path) => {
  return fs.readFileSync(path, 'utf-8');
}


const main = async () => {
    // 打开浏览器
  const webDriver = await openChorme(Builder);

  // 定位到页面中登陆注册按钮
  const PositioningStrategyLoginBtn = By.xpath("//*[@id='header']/div[1]/div[3]/div/a");
  // 等待登陆注册按钮元素出现
  await waitElementAppera(PositioningStrategyLoginBtn, webDriver, until);
  // 查找登陆注册按钮
  const loginBtnEle = await findElement(PositioningStrategyLoginBtn, webDriver);
  // 点击登陆注册按钮跳转到登陆页
  await loginBtnEle.click();
  
    // 定位到微信登录按钮出现
  const PositioningStrategyWechatLoginBtn = By.xpath("//*[@id='wrap']/div/div[2]/div[2]/div[2]/div[1]/div[4]/a");
  // 等到微信登陆按钮的出现
  await waitElementAppera(PositioningStrategyWechatLoginBtn, webDriver, until);
  // 找到微信登陆按钮元素
  const wechatLoginBtn = await findElement(PositioningStrategyWechatLoginBtn, webDriver);
  // 选择微信扫码登录
  await wechatLoginBtn.click();

  // 等待用户扫码，登录成功
  // TODO: 添加超时处理措施
  const PositioningStrategyLoginSuccess = By.xpath("//*[@id='header']/div[1]/div[3]/ul/li[2]/a");
  await waitElementAppera(PositioningStrategyLoginSuccess, webDriver, until)

  // 获取职位描述信息
  const des = await getJobDescriptionByIndex(1, webDriver);
  
  // 获取简历描述信息
  const fileContent = readFile('./test.txt');

  // 连接openAI
  
};

main();

