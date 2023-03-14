import http from 'http';
import  url  from 'url';
import * as weatherdata from './crud_module.mjs';
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.write("hello")
    // const result = weatherdata.read('kolkata');
    // console.log(result);
    // response.write(JSON.stringify(result));
    try{
        console.log(1);
        response.setHeader("Access-Control-Allow-Origin","*")
    let parseUrl = url.parse(request.url,true);
    let place = parseUrl.query.place;
    if (place!=undefined) {
        const result = weatherdata.read(place);
        response.write(JSON.stringify(result));
        response.end()
    }
    }
    catch(err){
        console.log(err);
    }
    // Send the response body as "Hello World"
    response.end();
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');