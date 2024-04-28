let key = "3e484088774a4db5800f249d9258c922";
let cardData = document.querySelector(".cardData")
let searchbtn= document.getElementById("searchbtn")
let inputData= document.getElementById("inputData");
let searchtype =document.getElementById("type");

const  getData= async(input) =>{
let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
let jsonData =  await res.json();
console.log(jsonData.articles);
searchtype.innerText="Search :"+input;
inputData.value=""
cardData.innerHTML="";
jsonData.articles.forEach(function(article){
console.log(article);

let divs= document.createElement("div");
divs.classList.add("card");
cardData.appendChild(divs);

divs.innerHTML=`
<img src="${article.urlToImage}" alt="">
<h3>${article.title}</h3>
 <p>${article.description}</p>
`
divs.addEventListener("click",function(){
    window.open(article.url)
})
})

}
window.addEventListener("load",function(){
getData("India")
})
window.
searchbtn.addEventListener("click",function(){
    let inputText= inputData.value
    getData(inputText);
})
function navClick(navName){
    if(navName == "politics"){
        document.getElementById("politics").style.color="rgb(0, 140, 255)";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";

        
    }
    
    if(navName == "sports"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="rgb(0, 140, 255)";
        document.getElementById("technology").style.color="white";
    }
        
        if(navName == "technology"){
            document.getElementById("politics").style.color="white";
            document.getElementById("sports").style.color="white";
            document.getElementById("technology").style.color="rgb(0, 140, 255)";
        }
            
    getData(navName)
        }

