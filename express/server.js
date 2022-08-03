const express = require("express");
const { urlLogger } = require("./middlewares/urlLogger");
const { notFound } = require("./middlewares/notFound");
const { resolveAlias } = require("./controllers/resolveAlias");
const { ping } = require("./controllers/ping");

const app = express();

app.use(urlLogger);
app.get("/ping", ping);
app.get("/:alias", resolveAlias);
app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => console.info(`Server started on port §${PORT}`));
