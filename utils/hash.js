var crypto = require('crypto');

function MD5(text) {
  return crypto.createHash('md5').update(text.toString(), 'utf8').digest('hex');
}

function sha1(text) {
  return crypto.createHash('sha1').update(text.toString(), 'utf8').digest('hex');
}

function sha256(text) {
  return crypto.createHash('sha256').update(text.toString(), 'utf8').digest('hex');
}

function sha512(text) {
  return crypto.createHash('sha512').update(text.toString(), 'utf8').digest('hex');
}

module.exports = {
  MD5,
  sha1,
  sha256,
  sha512
};