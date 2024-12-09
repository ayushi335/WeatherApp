// http://api.weatherapi.com/v1/current.json?key=e3f339af74744c16b42193212240912&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector("time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector("search_area");
const form = document.querySelector('form')

form.addEventListener('submit' , searchForLocation)

let target = 'Lucknow'

const fetchResults = async (targetLocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=e3f339af74744c16b42193212240912&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    let locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text

    updateDetails(temp , location , time , condition)
}

function updateDetails(temp , locationName , time , condition){
    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandTimeField.innerText = time
    conditionField.innerText = condition
    
}

function searchForLocation(e){
    e.preventDefault()

    target = searchField.value
    fetchResults(target)
}

fetchResults(target)