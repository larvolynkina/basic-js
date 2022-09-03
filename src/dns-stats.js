const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let str = '';
  const obj = {};
  const allDNS = domains.map((domain) => domain.split('.').reverse()).flat();
  const uniqueDNS = [...new Set(allDNS)];
  const count = [];
  for (let i = 0; i < uniqueDNS.length; i += 1) {
    count.push(allDNS.filter((item) => item === uniqueDNS[i]).length);
    str += `.${uniqueDNS[i]}`;
    obj[str] = count[i];
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
