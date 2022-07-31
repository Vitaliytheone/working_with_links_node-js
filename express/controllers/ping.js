function ping(_, response) {
    return response.send("pong");
}

module.exports = { ping };
