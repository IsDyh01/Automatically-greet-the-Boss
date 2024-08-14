const chrome = require("selenium-webdriver/chrome");
/**
 * 打开谷歌浏览器
 */
const openChorme = async (Builder) => {
  const options = new chrome.Options();
  options.addArguments("--detach");
  let webDriver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
  // 全屏打开浏览器，否则不在视口内的元素不能点击等操作
  await webDriver.manage().window().maximize();
  // 打开指定的url到谷歌浏览器
  await webDriver.get(
    "https://www.zhipin.com/web/geek/job-recommend?ka=header-job-recommend"
  );
  return webDriver;
};

module.exports = openChorme;
