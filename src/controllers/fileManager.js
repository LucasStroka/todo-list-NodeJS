const fs = require("fs").promises;
const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "..", "cache", "cache.json");

module.exports.writer = (array) => {
  const json = JSON.stringify(array);
  fs.writeFile(caminhoArquivo, json, {
    flag: "a",
  });
};
