// By 对象用于指定你用来定位页面元素的策略。它提供了一组方法，每种方法都对应不同的定位方式。
// 通过这些方法，你可以精确地找到页面上的元素，以便进行进一步的操作，比如点击、输入文本或提取信息。

//Key 对象提供了键盘按键的常量，可以用来模拟键盘输入操作。它包括常用的按键常量，如 Key.ENTER、Key.TAB、Key.ESCAPE 等。

// until 对象提供了一组等待条件，用于在操作元素之前等待某些条件满足。常用的条件包括元素可见、元素存在、页面标题变化等。
// 它有助于处理动态内容或延迟加载的元素
const { Builder, By, Key, until } = require("selenium-webdriver");
const findElement = require("./findElement");
const waitElementAppera = require("./waitElementAppera");
const openChorme = require("./openChorme");

const main = async () => {
  const webDriver = await openChorme(Builder);
  // 定位到页面中登陆注册按钮
  const PositioningStrategy = By.xpath("//*[@id='header']/div[1]/div[3]/div/a");
  // 等待登陆注册按钮元素出现
  await waitElementAppera(PositioningStrategy, webDriver, until);
  // 查找登陆注册按钮
  const ele = await findElement(PositioningStrategy, webDriver);
  // 点击登陆注册按钮
  await ele.click();
};

main();
