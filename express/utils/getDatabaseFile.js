const path = require("path");
const { dbPath } = require("../config");
const linksDevFilePath = path.resolve(dbPath, "./links.dev.json");
const linksProdFilePath = path.resolve(dbPath, "./links.prod.json");

function getDatabaseFile() {
    return process.env.LINKS_TYPE === "prod" ? linksProdFilePath : linksDevFilePath;
}

module.exports = { getDatabaseFile };
