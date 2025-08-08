async function getNews(){
    try{
    let language=document.getElementById("language").value;
    const response=await fetch(`https://newsdata.io/api/1/latest?apikey=pub_c5d14e16277f455b96ce2c3fb87fbc70&language=${language}`);
    const data= await response.json();
    document.getElementById("headline").innerHTML=data.results[0].title;
    document.getElementById("description").innerHTML=data.results[0].description;
    document.getElementById("image").innerHTML=`<img src="${data.results[0].image_url}" width="200px" height="200px">`;
    document.getElementById("source").innerHTML=data.results[0].source_name;
    document.getElementById("publish").innerHTML=data.results[0].pubDate;
    document.getElementById("newsLink").innerHTML=`<a href="${data.results[0].link}" target="_blank">Read More</a>`;
    console.log(data);
    
    }catch(error){
        console.log(error);
    }
}