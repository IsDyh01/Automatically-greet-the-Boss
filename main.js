// By 对象用于指定你用来定位页面元素的策略。它提供了一组方法，每种方法都对应不同的定位方式。
// 通过这些方法，你可以精确地找到页面上的元素，以便进行进一步的操作，比如点击、输入文本或提取信息。

//Key 对象提供了键盘按键的常量，可以用来模拟键盘输入操作。它包括常用的按键常量，如 Key.ENTER、Key.TAB、Key.ESCAPE 等。

// until 对象提供了一组等待条件，用于在操作元素之前等待某些条件满足。常用的条件包括元素可见、元素存在、页面标题变化等。
// 它有助于处理动态内容或延迟加载的元素
const { Builder, By, Key, until } = require("selenium-webdriver");
const findElement = require("./findElement");
const waitElementAppera = require("./waitElementAppera");
const openChorme = require("./openChorme");
const OPENAI_CONFIG = require("./openaiConfig");
const ai = require("openai");
const readCurriculumviatae = require("./readCurriculumvitae");
const getHelloContent = require("./getHelloContent");
const getJobDescriptionByIndex = require("./getJobDescriptionByIndex");

const openai = new ai({
  apiKey: OPENAI_CONFIG.API_KEY,
  baseURL: OPENAI_CONFIG.BASE_URL,
});

const main = async () => {
  // 打开浏览器
  const webDriver = await openChorme(Builder);

  // 定位到页面中登陆注册按钮
  const PositioningStrategyLoginBtn = By.xpath(
    "//*[@id='header']/div[1]/div[3]/div/a"
  );
  // 等待登陆注册按钮元素出现
  await waitElementAppera(PositioningStrategyLoginBtn, webDriver, until);
  // 查找登陆注册按钮
  const loginBtnEle = await findElement(PositioningStrategyLoginBtn, webDriver);
  // 点击登陆注册按钮跳转到登陆页
  await loginBtnEle.click();

  // 定位到微信登录按钮出现
  const PositioningStrategyWechatLoginBtn = By.xpath(
    "//*[@id='wrap']/div/div[2]/div[2]/div[2]/div[1]/div[4]/a"
  );
  // 等到微信登陆按钮的出现
  await waitElementAppera(PositioningStrategyWechatLoginBtn, webDriver, until);
  // 找到微信登陆按钮元素
  const wechatLoginBtn = await findElement(
    PositioningStrategyWechatLoginBtn,
    webDriver
  );
  // 选择微信扫码登录
  await wechatLoginBtn.click();

  // 等待用户扫码，登录成功
  // TODO: 添加超时处理措施
  const PositioningStrategyLoginSuccess = By.xpath(
    "//*[@id='header']/div[1]/div[3]/ul/li[2]/a"
  );
  await waitElementAppera(PositioningStrategyLoginSuccess, webDriver, until);

  // 获取职位描述信息
  const jobDes = await getJobDescriptionByIndex(2, webDriver, By);
  console.log("职位描述信息: ", jobDes);

  // 获取简历描述信息
  const personalDes = readCurriculumviatae("./test.txt");
  console.log("简历描述信息:", personalDes);

  // 调用openai根据职位描述以及简历信息生成招呼语
  const helloContent = await getHelloContent(openai, jobDes, personalDes);

  console.log("生成招呼语:", helloContent);

  // 立即沟通按钮
  const PositioningStrategyCommunicationBtn = By.xpath(
    "//*[@id='wrap']/div[2]/div[2]/div/div/div[2]/div/div[1]/div[2]/a[2]"
  );
  // 等待立即沟通按钮出现
  await waitElementAppera(
    PositioningStrategyCommunicationBtn,
    webDriver,
    until
  );
  // 找到立即沟通按钮
  const communicationBtn = await findElement(
    PositioningStrategyCommunicationBtn,
    webDriver
  );
  // 点击沟通按钮进入聊天页
  await communicationBtn.click();

  // 聊天框
  const PositioningStrategyChatBox = By.xpath("//*[@id='chat-input']");
  // 等待聊天框出现
  await waitElementAppera(PositioningStrategyChatBox, webDriver, until);
  // 找到聊天框
  const chatBox = await findElement(PositioningStrategyChatBox, webDriver);
  // 清除聊天框可能的内容
  await chatBox.clear();
  // 将招呼语复制到聊天框内
  await chatBox.sendKeys(helloContent);
  // 发送
  await chatBox.sendKeys(Key.ENTER);
};

main();
