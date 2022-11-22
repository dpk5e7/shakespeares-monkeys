const CryptoJS = require("crypto-js");

module.exports = {
  encrypt: function (plainText) {
    let cipherText = "";
    if (plainText) {
      const key = CryptoJS.enc.Base64.parse(process.env.AES_KEY);
      const iv = CryptoJS.enc.Base64.parse(process.env.AES_IV);

      const cipherTextData = CryptoJS.AES.encrypt(plainText, key, {
        iv: iv,
      }).ciphertext;

      cipherText = cipherTextData.toString(CryptoJS.enc.Base64);
    }

    return cipherText;
  },

  decrypt: function (cipherText) {
    let plainText = "";
    if (cipherText) {
      const rawData = CryptoJS.enc.Base64.parse(cipherText);
      const key = CryptoJS.enc.Base64.parse(process.env.AES_KEY);
      const iv = CryptoJS.enc.Base64.parse(process.env.AES_IV);

      const plainTextData = CryptoJS.AES.decrypt({ ciphertext: rawData }, key, {
        iv: iv,
      });

      plainText = plainTextData.toString(CryptoJS.enc.Latin1);
    }

    return plainText;
  },

  hash: function (plainText) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(plainText));
  },
};
