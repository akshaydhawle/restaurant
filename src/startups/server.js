const config = require('config');

function connectToServer(app) {
    const port = config.get('SERVER.PORT');
    app.listen(port, () => {
        console.log(`server listening on port : ${port}`);
    })
}

module.exports = {
    connectToServer
}