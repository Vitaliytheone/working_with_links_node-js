function urlLogger(request, response, next) {
    console.info(request.originalUrl);

    next();
}

module.exports = { urlLogger };
