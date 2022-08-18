const path = require("path");
const { dbPath } = require("../config");
const { compressFile } = require("./compressFile");
const { getDatabaseFile } = require("./getDatabaseFile");

const linksFilePath = getDatabaseFile();

function dumpDatabase() {
    setInterval(() => {
        compressFile(linksFilePath, path.resolve(dbPath, "dumps"), "db-dump.json");

        console.log("Database dump was create.");
    }, 1000000);
}

module.exports = { dumpDatabase };
