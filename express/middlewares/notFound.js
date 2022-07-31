async function notFound(_, response) {
    response.status(404);

    return response.send({ messageId: "page-not-found" });
}

module.exports = { notFound };
