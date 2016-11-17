module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Server running at: ${app.get("port")}`);
    });
}
