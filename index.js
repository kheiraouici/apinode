const http = require ("http")
const port = 3250
http.createServer( function (req, res){
    if (req.url === "/") res.end("site ")
        else res.end("url non definie")
    if (req.url === "/about") res.end("site pertinente")
        else res.end("url non definie")

}).listen(port , () => console.log("ca fonctionne" , port))
