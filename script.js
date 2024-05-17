  
const accesskey = "2WsnWJ3N2LsIghI3RfoJG1_1-8I5KZyl9KbD-Tj4etg"     
     
const formEl = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more-btn");
 


let inputData = "";
let page = 1;


async function searchImages(){
inputData = inputEl.value;
const url = `<https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}&per _page=12`;

const response = await fetch(url);
const data = await response.json();


console.log(data);
const results = data.results;

if(page === 1){
     searchResult.innerHTML = "";

}


results.map((result) =>{
     const imageWrapper =  document.createElement("div");
     imageWrapper.classList.add("search-result");
     const image = document.createElement("img");
     image.src = result.urls.small;
     image.alt = result.alt_description;
     const imageLink = document.createElement('a');
     imageLink.href = result.links.html;
     imageLink.target = "_blank";
     imageLink.textContent =result.alt_description;


     imageWrapper.appendChild(image);
     imageWrapper.appendChild(imageLink);
     imageWrapper.appendChild(imageContainer);
});
     page++;
     if(page >1){
          showMore.style.display = "block"
     }
}


formEl.addEventListener("submit",(event) =>{
     event.preventDefault();
     page = 1;
     searchImages();
}
 )

 showMore.addEventListener("click",()=>{
      // page++;
       searchImages();
 })
 




