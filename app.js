// 
const searchfield=document.querySelector('.search input');
const searchbutton=document.querySelector('.search button');
const target=searchfield.value || "london"


searchbutton.addEventListener("click",()=>{
        fetchdata(target)
})


// let url=`https://api.weatherapi.com/v1/current.json?key=0604fc3681714f21b9682906242207&q=london&aqi=no`

const fetchdata=async (target)=>{
        let logo=document.querySelector(".condition-logo");
        let value;
        try{
                let url=`https://api.weatherapi.com/v1/current.json?key=0604fc3681714f21b9682906242207&q=${target}&aqi=no`

                const result=await fetch(url);
                var data = await result.json();
                console.log(data)
                document.querySelector('.tempreature').innerHTML=data.current.temp_c + 'C';
                document.querySelector('.location').innerHTML=data.location.name;
                document.querySelector('.time').innerHTML=data.location.localtime;
                document.querySelector('.condition').innerHTML=data.current.condition.text;   
                value=data.current.condition.text

        }
        catch(err){
                document.body.innerHTML=`<img class="logo" src="invalid.svg" alt=""> <a href="index.html">Try again</a>`
                console.log("asd")
        }

        switch (value) {
                case "Sunny":
                logo.innerHTML=`<img class="logo" src="sunny-day-svgrepo-com.svg" alt="">`
                break;
                case "Partly cloudy":
                logo.innerHTML=`<img class="logo" src="partly-cloudy-rain-svgrepo-com.svg" alt="">`
                break;
                case "Mist":
                logo.innerHTML=`<img class="logo" src="mist-svgrepo-com.svg" alt="">`
                break;
                case "Clear":
                logo.innerHTML=`<img class="logo" src="mist-svgrepo-com (1).svg" alt="">`
                break;
                case "Patchy rain nearby":
                logo.innerHTML=`<img class="logo" src="rain.svg" alt="">`
                break;
                case "Overcast":
                logo.innerHTML=`<img class="logo" src="cloudy.svg" alt="">`
                break;
                default:
                        console.log("nsand")
                        logo.innerHTML="";
                break;
        }
}
fetchdata(target)
