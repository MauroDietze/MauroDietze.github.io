var en = require("./translations.en.json");
var es = require("./translations.es.json");

const i18n = {
  translations: {
    es,
    en
  },
  defaultLang: "es",
  useBrowserDefault: true,
};

module.exports = i18n;