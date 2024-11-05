let allPets = []
let likedPets = []
let dislikedPets = []
let a=true;

const cardContainer = document.getElementById("card-container")
const pet1 = {
    id: "0",
    name: "pet1",
    age: "2",


}
const pet2 = {
    id: "1",
    name: "pet2",
    age: "2"


}
const pet3 = {
    id: "2",
    name: "pet3",
    age: "2"
}
const pet4 = {
    id: "3",
    name: "pet4",
    age: "2"
}
const pet5 = {
    id: "4",
    name: "pet5",
    age: "2"
}
allPets.push(pet1)
allPets.push(pet2)
allPets.push(pet3)
allPets.push(pet4)
allPets.push(pet5)
console.log("aaa",allPets)

let l = allPets.length;
let cmp = 0;

showCard()
function showCard(){

    console.log(cmp<l)
    cardContainer.innerHTML=``

    if(cmp<l){
      
            cardContainer.innerHTML =`     <div id="card" class="card">
                    <img src="./image/${allPets[cmp].name}.png" alt="">

                </div>`
    } else {
        

    }
    
}
document.getElementById("like-btn").addEventListener("click", function (){
    
   
    if(cmp < l ){
        likedPets.push(allPets[cmp])
    console.log(likedPets)
        if (cmp == l-1){
            cardContainer.innerHTML =` NO MORE PETS AVAILABLE `
                document.getElementById("like-btn").innerText ="Liked Pets"
                document.getElementById("like-btn").setAttribute("id", "liked-btn")
                document.getElementById("ignore-btn").innerText ="Refresh"
                document.getElementById("ignore-btn").setAttribute("id", "refresh-btn")
         }else {
            cmp++;
            showCard();
         }
       
    }
    

})
document.getElementById("ignore-btn").addEventListener("click", function (){
    
    if(cmp < l ){
        dislikedPets.push(allPets[cmp])
    console.log(dislikedPets)
    if (cmp == l-1){
        cardContainer.innerHTML =` NO MORE PETS AVAILABLE `
        document.getElementById("like-btn").innerText ="Liked Pets"
        document.getElementById("like-btn").setAttribute("id", "liked-btn")
        document.getElementById("ignore-btn").innerText ="Refresh"
        document.getElementById("ignore-btn").setAttribute("id", "refresh-btn")
    }else {
        cmp++;
         showCard();
        }
    }


})

document.getElementById("refresh-btn").addEventListener("click", function(){
    cmp = 0;
    document.getElementById("refresh-btn").innerText ="Ignore"
    document.getElementById("refresh-btn").setAttribute("id", "ignore-btn")
    document.getElementById("liked-btn").innerText ="Like"
    document.getElementById("liked-btn").setAttribute("id", "like-btn")
showCard()

})