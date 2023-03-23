// import  url  from 'url';      incase we use parseUrl to get query value
const fs = require('fs')
const http = require('http');
const path = require('path');
const hostname = '127.0.0.1';

function readDb(filename, format) {
    const data = fs.readFileSync(path.join(__dirname, filename), format);
    let data1 = JSON.parse(data);
    return data1;
}

const weatherData = readDb("./database.txt", "utf-8");

const port = 8081;

function getRoutesBasedData(route, data) {
    let status = 200;
    console.log('route', route);

    if (route == '/') {
        return JSON.stringify({
            apiData: data,
            status: 200,
            route: route,
            message: 'hey i am running ...'
        })
    }
    else if (route == '/all-cities') {
        let allCities = [];
        for (let i = 0; i < data.length; i++) {
            allCities.push(data[i].location);
        }
        return JSON.stringify(allCities);
    }
    else {
        let loc = route.split("/")[1];
        loc = loc.split("%20").join(" ")

        console.log(loc);
        //    console.log(typeof (data.find((item) => item.location.toLowerCase() == loc.toLowerCase())));
        for (let i = 0; i < data.length; i++) {
            if (data[i].location.toLowerCase() == loc.toLowerCase()) {
                console.log(data[i]);

                return JSON.stringify({
                    apiData: data[i],
                    status: 200,
                    route: route,
                })
            }
        }
    }
}

function getRequestData(request) {
    if (request.url === '/') {
        return getRoutesBasedData('/', weatherData)
    }
    else if (request.url === '/all-cities') {
        return getRoutesBasedData('/all-cities', weatherData)
    }
    else {
        return getRoutesBasedData(request.url, weatherData)
    }
}

const ourServer = http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.end(getRequestData(request));
});

ourServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})