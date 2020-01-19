/* eslint no-unused-vars: 0 */
exports.config = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      }
    }
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["dot"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  mochaOpts: {
    timeout: 60000
  },
  before(capabilities, specs) {
    /* eslint-disable-next-line global-require */
    require("@babel/register");
  }
};
