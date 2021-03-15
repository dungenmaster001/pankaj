var request  =  new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true) ;

request.send() ;  

request.onload = function()
{
    var countryDATA = JSON.parse(this.response);
    for  (var i = 0; i<countryDATA.length ; i++)
    {
        console.log(  `${countryDATA[i].name}  ${countryDATA[i].population}`)
    }
    
}

console.log("Hello")