const apiKey = '2f3aaf007443db80340aaf543509f4c4';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json
    });
}

export default getWeather;