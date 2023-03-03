function getWeatherData(loc){
    const weatherData= [
        {
            location: 'kolkata',
            tempC: '31.0',
            tempF: '88.0',

            condition: {
                Text: 'Mist',
                humidity: '43',
                feelsLikeC: '30.7',
                feelsLikeF: '87.2'
            }

        },
        {
            location: 'london',
            tempC: '4.0',
            tempF: '39.2',

            condition: {
                Text: 'Overcast',
                humidity: '75',
                feelsLikeC: '1.2',
                feelsLikeF: '34.2'
            }

        },
        {
            location: 'Ottawa',
            tempC: '-3.4',
            tempF: '25.9',

            condition: {
                Text: 'Clear',
                humidity: '67',
                feelsLikeC: '-8.4',
                feelsLikeF: '16.9'
            }

        },
        {
            location: 'Mexico City',
            tempC: '20.0',
            tempF: '68.0',

            condition: {
                Text: 'Clear',
                humidity: '26',
                feelsLikeC: '20.0',
                feelsLikeF: '68.0'
            }

        },
        {
            location: 'Brasilia',
            tempC: '19.0',
            tempF: '66.2',

            condition: {
                Text: 'Clear',
                humidity: '94',
                feelsLikeC: '19.0',
                feelsLikeF: '66.2'
            }

        },
        {
            location: 'Paris',
            tempC: '1.0',
            tempF: '33.8',

            condition: {
                Text: 'Mist',
                humidity: '93',
                feelsLikeC: '-2.0',
                feelsLikeF: '28.5'
            }

        },{
            location: 'Chicago',
            tempC: '1.5',
            tempF: '34.7',

            condition: {
                Text: 'Partly cloudy',
                humidity: '80',
                feelsLikeC: '-2.8',
                feelsLikeF: '27.0'
            }

        },
        {
            location: 'Bali',
            tempC: '27.7',
            tempF: '81.9',

            condition: {
                Text: 'Light rain shower',
                humidity: '77',
                feelsLikeC: '31.2',
                feelsLikeF: '88.2'
            }

        },
        {
            location: 'Singapore',
            tempC: '25.0',
            tempF: '77.0',

            condition: {
                Text: 'Moderate rain',
                humidity: '94',
                feelsLikeC: '27.9',
                feelsLikeF: '82.2'
            }

        },
        {
            location: 'Oslo',
            tempC: '-4',
            tempF: '24.8',
            condition: {
                Text: 'Partly cloudy',
                humidity: '86',
                feelsLikeC: '-5.3',
                feelsLikeF: '22.5'
            }
        },
        {
            location: "Beijing",
            tempC : "20.0",
            tempF :"68.0",
            condition:{
                text:"Sunny",
                humidity:"8",
                feelsLikeC:"20.0",
                feelsLikeF:"68.0",
            }
        },
        {
            location:"Tokyo",
            tempC : "13.0",
            tempF :"55.4",
            condition:{
                text:"Partly Cloudy",
                humidity:"30",
                feelsLikeC:"12.0",
                feelsLikeF:"53.6",
            }
        },
        {
            location:"Berlin",
            tempC : "-1.0",
            tempF :"30.2",
            condition:{
                text:"Mist",
                humidity:"93",
                feelsLikeC:"-3.2",
                feelsLikeF:"26.2",
            }
        },
        {
            location: 'Moscow',
            tempC: '-1',
            tempF: '30.2',
            condition: {
                Text: 'Light snow showers',
                humidity: '93',
                feelsLikeC: '-6.1',
                feelsLikeF: '21.1'
            }
        },
        {
            location: 'Kazan',
            tempC: '-9',
            tempF: '15.8',
            condition: {
                Text: 'Light snow',
                humidity: '92',
                feelsLikeC: '-15.5',
                feelsLikeF: '4.2'
            }
        },
        {
            location: 'Adana',
            tempC: '21',
            tempF: '69.8',
            condition: {
                Text: 'Partly cloudy',
                humidity: '35',
                feelsLikeC: '21',
                feelsLikeF: '69.8'
            }
        },
        {
            location: 'Budapest',
            tempC: '1',
            tempF: '33.8',
            condition: {
                Text: 'Mist',
                humidity: '93',
                feelsLikeC: '0.3',
                feelsLikeF: '32.5'
            }
        },
        {
            location: 'Barcelona',
            tempC: '4',
            tempF: '39.2',
            condition: {
                Text: 'Clear',
                humidity: '65',
                feelsLikeC: '2.1',
                feelsLikeF: '35.7'
            }
        },
        {
            location: 'Sydney',
            tempC: '22.0',
            tempF: '71.6',
            condition: {
                Text: 'Partly Cloudy',
                humidity: '83',
                feelsLikeC: '24.5',
                feelsLikeF: '76.2'
            }
        },
        {
            location: 'California City',
            tempC: '5.6',
            tempF: '71.6',
            condition: {
                Text: 'Clear',
                humidity: '70',
                feelsLikeC: '3.9',
                feelsLikeF: '38.9'
            }
        }

    ]


    // const result = weatherData[0].location;
    const result = weatherData.find((item)=> item.location.toLowerCase() == loc.toLowerCase());
    console.log( result);
    // return result;
}
getWeatherData("Singapore");
