const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "3e37aca12ca287b05b7454f2d7539db3";

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");


searchBtn.addEventListener("click",function(){
    let searchTerm = searchInput.value;
    sendRequest(searchTerm);
    searchInput.value = "";
})

searchInput.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        let searchTerm = searchInput.value;
        sendRequest(searchTerm);
        searchInput.value = "";
    }
})

const sendRequest = (newCity) => {
    let query = `${url}${newCity}&appid=${apiKey}&units=metric&lang=tr`
    fetch(query)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        const city = document.querySelector("#city");
        city.innerHTML = `${data.name}, ${data.sys.country}`
        
        const temp = document.querySelector("#temp");
        temp.innerHTML =`${(data.main.temp).toFixed(0)}°C`

      const desc = document.querySelector("#desc");
      desc.innerHTML = `${(data.weather[0].description).toUpperCase()}`
        const minmax = document.querySelector("#minmax");
        minmax.innerHTML = `${(data.main.temp_min).toFixed(0)}°C ${(data.main.temp_max).toFixed(0)}°C`
    })
}
