const fs = require("fs").promises;
const path = require("path");
const http = require("http");

const linksDevFilePath = path.resolve(__dirname, "./links.dev.txt");
const linksProdFilePath = path.resolve(__dirname, "./links.prod.txt");

const linksFilePath = process.env.LINKS_TYPE === "prod" ? linksProdFilePath : linksDevFilePath;

async function printLinkByAlias(alias) {
    const linksFileContent = await fs.readFile(linksFilePath, "utf-8");

    const links = linksFileContent
        .split("\n")
        .filter((str) => !!str)
        .map((row) => row.split(" "))
        .reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {});

    return links[alias];
}

const server = http.createServer((req, resp) => {
    console.log(req.url);

    const alias = req.url.slice(1);

    printLinkByAlias(alias).then((longLink) => {
        if (!longLink) {
            resp.statusCode = 404;
            return resp.end("not-found");
        }

        if (process.env.LINKS_TYPE === "prod") {
            resp.setHeader("location", longLink);
            resp.statusCode = 302;

            resp.end();
        } else {
            resp.end(longLink);
        }
    });
});

server.listen(3000, () => console.log("Server started on port 3000"));
