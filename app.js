// 
const searchfield=document.querySelector('.search input');
const searchbutton=document.querySelector('.search button');


searchbutton.addEventListener("click",()=>{
        fetchdata(searchfield.value)
})
const fetchdata=async (target)=>{
        let url=`https://api.weatherapi.com/v1/current.json?key=0604fc3681714f21b9682906242207&q=${target}&aqi=no`
        const result=await fetch(url);
        var data = await result.json();
        console.log(data)
        document.querySelector('.tempreature').innerHTML=data.current.temp_c;
        document.querySelector('.location').innerHTML=data.location.name;
        document.querySelector('.time').innerHTML=data.location.localtime;
        document.querySelector('.condition').innerHTML=data.current.condition.text;

}
