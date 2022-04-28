// window.addEventListener('Load',()=>{
    let long;
    let lat;
    let locationTimezone=document.querySelector(".location-timezone");
    let temperatureDegree=document.querySelector(".temperature-degree");
    let temperatureDescription=document.querySelector(".temperature-description");
    let temperatureSection=document.querySelector(".temperature");
    const temperatureSectionspan=document.querySelector(".temperature span")
    let icon=document.getElementById("icon");

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition
    (position=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
    });
}

const api=`http://api.weatherapi.com/v1/current.json?key=01f1c203ec374f6a88f63931222804&q=Karachi&aqi=no`;
        fetch(api)
        .then(response=>{
            return response.json();
            console.log(response);
        })
        .then(data=>{
            console.log(data)
            temperatureDegree.innerHTML=data.current.temp_f;
            temperatureDescription.innerHTML=data.current.condition.text;
            icon.setAttribute("src",data.current.condition.icon);
            locationTimezone.innerHTML=data.location.localtime.slice(10,20);

            let celsius=data.current.temp_c;
            
            temperatureSection.addEventListener('click',()=>{
                if(temperatureSectionspan.innerHTML ==='F'){
                    temperatureSectionspan.innerHTML ='C';
                    temperatureDegree.innerHTML=celsius;
                }
                else {
                    temperatureSectionspan.innerHTML = 'C'
                }
            })

        });
    