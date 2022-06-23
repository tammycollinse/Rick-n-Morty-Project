
const h3 = document.createElement("h3");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const img = document.createElement("img");

const showChars = document.createElement("button");// the show all characters button
showChars.class = "all-chars"
showChars.textContent = "Show list of characters from Rick n Morty!";
document.querySelector("#buttons.which-chars").append(showChars);

const filterHumans = document.createElement("button"); //this is the button
filterHumans.id = "filter-humans";
filterHumans.textContent = "Filter Human Characters"
document.querySelector("#buttons.which-chars").appendChild(filterHumans);

const filterAliens = document.createElement("button");// this is the section to filter aliens out
filterAliens.id = "filter-aliens";
filterAliens.textContent = "Filter Alien Characters"
document.querySelector("#buttons.which-chars").appendChild(filterAliens)

function getInformation(arrayOfCharacters){ 
  const name = arrayOfCharacters.name ;
  const deadOrAlive = arrayOfCharacters.status;
  const species = arrayOfCharacters.species;
  const type = arrayOfCharacters.type;
  const img_url = arrayOfCharacters.image;
  
  const li = document.createElement("li")
  li.textContent = name;
  document.querySelector("#list-characters").appendChild(li)
  
  li.addEventListener("mouseover" , () => {
    li.style.color = "black"; 
  })
  li.addEventListener("mouseout" , ()=> {
   li.style.color = "white";
  })
  
  li.addEventListener("click" , () =>{
  h3.textContent = `Name: ${name}`;
  p1.textContent = `Alien or Human: ${species}`
  p2.textContent = `Status: ${deadOrAlive}`;
  p3.textContent = type;
  img.src = img_url
  })
  }


showChars.addEventListener("click", () => { 
document.querySelector("#list-characters").innerHTML = ` `;
fetch("https://rickandmortyapi.com/api/character").then(response => response.json())
.then(charsData => charsData.results.forEach(arrayOfCharacters => getInformation(arrayOfCharacters)));
document.querySelector("#main.character-content").appendChild( h3 )
document.querySelector("#main.character-content").appendChild(p1)
document.querySelector("#main.character-content").appendChild(p2)
document.querySelector("#main.character-content").appendChild(p3)
document.querySelector("#main.character-content").appendChild(img)
}); // end of event listener


filterHumans.addEventListener("click" , () =>{ 
fetch("https://rickandmortyapi.com/api/character").then(response => response.json()) 
.then(charsData => {
document.querySelector("#list-characters");
const arrayOfCharacters = charsData.results;
document.querySelector("#list-characters").innerHTML = ` `;
arrayOfCharacters.filter( function(arrayOfCharacters){
   if (arrayOfCharacters.species === "Human"){
     console.log(arrayOfCharacters.name)
     getInformation(arrayOfCharacters);
     document.querySelector("#main.character-content").appendChild( h3 )
     document.querySelector("#main.character-content").appendChild(p1)
     document.querySelector("#main.character-content").appendChild(p2)
     document.querySelector("#main.character-content").appendChild(p3)
     document.querySelector("#main.character-content").appendChild(img)
   }
   })
 })
})

filterAliens.addEventListener("click" , () =>{ //this is the click event to filter humans out of character list
fetch("https://rickandmortyapi.com/api/character").then(response => response.json()) 
.then(charsData => {
document.querySelector("#list-characters");
const arrayOfCharacters = charsData.results
document.querySelector("#list-characters").innerHTML = ` `;
arrayOfCharacters.filter( function(arrayOfCharacters){
  if (arrayOfCharacters.species === "Alien"){
      console.log(arrayOfCharacters.name)
      getInformation(arrayOfCharacters);
     document.querySelector("#main.character-content").appendChild( h3 )
     document.querySelector("#main.character-content").appendChild(p1)
     document.querySelector("#main.character-content").appendChild(p2)
     document.querySelector("#main.character-content").appendChild(p3)
     document.querySelector("#main.character-content").appendChild(img)
     }
    })
  })
 })
 

function submitButton(){
document.querySelector("#main.character-content").innerHTML = ` `;
const form = document.querySelector("#new-form")
form.addEventListener("submit", (e) =>{
e.preventDefault()
const nameOfChar = document.querySelector("#name-input").value  
const imgLink = document.querySelector("#img-input").value
console.log(nameOfChar , imgLink)

h3.textContent = `Name: ${nameOfChar}`;
img.src = imgLink

document.querySelector("#main.character-content").appendChild( h3)
document.querySelector("#main.character-content").appendChild(img)
})
}
submitButton();

