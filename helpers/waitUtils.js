const { browser } = require ('webdriverio')

function waitUntilElementExist(element, timeout = 10000) {
  element.waiForExist(timeout);
}

module.exports = {
  waitUntilElementExist,
};