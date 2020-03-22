
module.exports = function(handle,server){
    // This needs to be the last route defined (render 404 for unmatched routes)
    server.get('*', (req, res) => {
        return handle(req, res);
    });
};