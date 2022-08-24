const express = require("express");
const { notFound } = require("./middlewares/notFound");
const { secure } = require("./middlewares/security");
const { resolveAlias } = require("./controllers/resolveAlias");
const { ping } = require("./controllers/ping");
const { addAlias } = require("./controllers/addAlias");
const { errorHandler } = require("./middlewares/errorHandler");
const { accessLogs } = require("./middlewares/accessLogs");
const { dumpDatabase } = require("./utils/dumpDatabase");
const { monitorProcess } = require("./utils/monitorProcess");
const { upgradeWithWs } = require("./ws");

const app = express();

secure(app);

app.use(express.json());

app.use(accessLogs());
app.use(accessLogs(true));

app.get("/ping", ping);
app.get("/:alias", resolveAlias);
app.post("/alias", addAlias);

app.use(notFound);
app.use(errorHandler);

const server = http.createServer(app);

upgradeWithWs(server);

const PORT = 3000;

app.listen(PORT, () => console.info(`Server started on port ${PORT}`));

dumpDatabase();
monitorProcess();
