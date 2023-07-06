const apikey='4c92bc1bfd2d1d9f69be33602bb5c443';
//const Api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;
//const imgurl=`https://openweathermap.org/img/wn/${img}.png`;
const form=document.querySelector('form');
const search1= document.getElementById('search1');
const information=document.getElementById('information');

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(search1.value);
        loadData(search1.value);
    });
async function loadData(city) 
{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    const response=await fetch(apiUrl);
    if(response.ok)
    {
    const data=await response.json();
    console.log(data);
    output(data);
    }
    else{
        console.log('error',response.status);
    }
}
function output(data)
{
    information.innerHTML=`
    <div id="image">
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
</div>
<div id="temp">
    <h1>${data.main.temp} °C</h1>
    <h2>${data.weather[0].main}</h2>
</div>
`


}
