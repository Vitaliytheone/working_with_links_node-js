const express = require("express");
const { urlLogger } = require("./middlewares/urlLogger");
const { notFound } = require("./middlewares/notFound");
const { resolveAlias } = require("./controllers/resolveAlias");
const { ping } = require("./controllers/ping");
const { addAlias } = require("./controllers/addAlias");

const app = express();

app.use(express.json());
app.use(urlLogger);

app.get("/ping", ping);
app.get("/:alias", resolveAlias);
// app.post("/alias", addAlias);

app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => console.info(`Server started on port ${PORT}`));
