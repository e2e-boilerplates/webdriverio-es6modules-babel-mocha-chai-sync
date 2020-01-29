/* eslint no-unused-vars: 0 */
exports.config = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000
  },
  before(capabilities, specs) {
    /* eslint-disable-next-line global-require */
    require("@babel/register");
  }
};
