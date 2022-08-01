const path = require("path");

const { dbPath } = require("../config");

const linksDevFilePath = path.resolve(dbPath, "./links.dev.json");
const linksProdFilePath = path.resolve(dbPath, "./links.prod.json");

const linksFilePath = process.env.LINKS_TYPE === "prod" ? linksProdFilePath : linksDevFilePath;

async function getByAlias(alias) {
    const links = require(linksFilePath);

    return links[alias];
}

module.exports = {
    getByAlias,
};
