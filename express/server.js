const express = require("express");
const { urlLogger } = require("./middlewares/urlLogger");

const app = express();

app.use(urlLogger);
app.get("/ping", ping);
app.get("/:alias", resolveAlias);
app.use(notFound);

const PORT = 3000;
