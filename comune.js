import communes from "./communes.json"

fetch("communes.json")
    .then(response => response.json())
    .then(json => console.log(json))
