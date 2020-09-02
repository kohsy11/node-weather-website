const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=f99680efa112cfa8e0f87f96c4302bd9&query=" + latitude + "," + longitude
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Invalid location", undefined)
        } else {
            const temp = body.current.temperature
            const temp_feel = body.current.feelslike
            const des = body.current.weather_descriptions[0]
            callback(undefined, des + ". It is currently " + temp + " degrees outside and it feels like " + temp_feel + " degrees.")
        }
    })
}

module.exports = forecast