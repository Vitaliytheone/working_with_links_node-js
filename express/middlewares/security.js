const { disablePoweredBy } = require("./disablePoweredBy");

const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

function secure(app) {
    app.use(disablePoweredBy);
}

module.exports = { secure };
