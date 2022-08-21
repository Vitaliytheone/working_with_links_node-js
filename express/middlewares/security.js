const { disablePoweredBy } = require("./disablePoweredBy");

const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

function secure(app) {
    app.use(disablePoweredBy);

    app.use(
        cors({
            origin: ["http://localhost:3000"],
        }),
    );

    app.use(
        helmet({
            contentSecurityPolicy: {
                useDefaults: true,
            },
        }),
    );

    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000,
        max: 120,
    });

    const speedLimiter = slowDown({
        windowMs: 1 * 60 * 1000,
        delayAfter: 100,
        delayMs: 1000,
    });

    app.use(speedLimiter);
    app.use(limiter);
}

module.exports = { secure };
